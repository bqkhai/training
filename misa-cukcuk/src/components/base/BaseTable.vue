<template>
  <div class="grid-header">
    <table id="tbListData" border="0" width="100%" cellspacing="0">
      <thead>
        <th><input type="checkbox" /></th>
        <th class="colspan" FieldName="EmployeeCode">Mã nhân viên</th>
        <th class="colspan" FieldName="FullName">Họ và tên</th>
        <th class="colspan" FieldName="Gender">Giới tính</th>
        <th class="colspan" FieldName="DateOfBirth">Ngày sinh</th>
        <th class="colspan" FieldName="PhoneNumber">Điện thoại</th>
        <th class="colspan" FieldName="Email">Email</th>
        <th class="colspan" FieldName="PositionName">Chức vụ</th>
        <th class="colspan" FieldName="DepartmentName">Phòng ban</th>
        <th class="colspan" FieldName="Salary">Mức lương cơ bản</th>
        <th class="colspan" FieldName="WorkStatus">Tình trạng công việc</th>
      </thead>
      <tbody class="grid-list">
        <tr
          v-for="employee in Employees"
          :key="employee.EmployeeId"
          @dblclick="rowDblClick(employee.EmployeeId)"
        >
          <td><input type="checkbox" /></td>
          <td>{{ employee.EmployeeCode }}</td>
          <td>{{ employee.FullName }}</td>
          <td>{{ employee.Gender | formatGender }}</td>
          <td style="text-align: center;">{{ employee.DateOfBirth | formatDate }}</td>
          <td>{{ employee.PhoneNumber }}</td>
          <td style="max-width: 250px;">{{ employee.Email }}</td>
          <td style="max-width: 250px;">{{ employee.PositionName }}</td>
          <td style="max-width: 250px;">{{ employee.DepartmentName }}</td>
          <td style="text-align: right">
            {{ employee.Salary | formatSalary }}
          </td>
          <td>{{ employee.WorkStatus | formatWorkStatus }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
@import url("../../css/common/base.css");
</style>

<script>
import axios from "axios";
import moment from "moment";
import numeral from "numeral";
// import "../../js/common/common"
export default {
  name: "BaseTable",

  created() {
    let me = this;
    axios
      .get("http://cukcuk.manhnv.net/v1/Employees/")
      .then((res) => {
        me.Employees = res.data;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  props: {},

  methods: {
    rowDblClick(id) {
      axios
        .get("http://cukcuk.manhnv.net/v1/Employees/" + id)
        .then((res) => console.log(res.data))
        .catch((err) => {
          console.log(err)
        })
    },
  },

  filters: {
    formatDate: function (date) {
      return moment(String(date)).format("DD/MM/YYYY");
    },

    formatGender: function (genderCode) {
      if (genderCode == null || genderCode == 3) return "";
      else if (genderCode == 0) return "Nữ";
      else if (genderCode == 1) return "Nam";
      else if (genderCode == 2) return "Khác";
    },

    formatSalary: function (salary) {
      if (Number.isInteger(salary)) {
        return numeral(salary).format(0.0).replaceAll(",", ".");
      } else {
        return "Không xác định";
      }
    },

    formatWorkStatus: function (status) {
      if (status == 1) return "Đang làm việc";
      else if (status == 2) return "Đã nghỉ việc";
      else return "Không xác định";
    },
  },

  data() {
    return {
      Employees: [],
    };
  },
};
</script>