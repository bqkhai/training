<template>
  <div class="grid-header">
    <table id="tbListData" border="0" width="100%" cellspacing="0">
      <thead>
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
      <tbody class="grid-list" v-for="employee in Employees" :key="employee.id">
        <td>{{ employee.EmployeeCode }}</td>
        <td>{{ employee.FullName }}</td>
        <td>{{ employee.GenderName }}</td>
        <td>{{ employee.DateOfBirth }}</td>
        <td>{{ employee.PhoneNumber }}</td>
        <td>{{ employee.Email }}</td>
        <td>{{ employee.PositionName }}</td>
        <td>{{ employee.DepartmentName }}</td>
        <td>{{ employee.Salary }}</td>
        <td>{{ employee.WorkStatus }}</td>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
</style>

<script>
import axios from "axios"
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

  filters:{
      
  },

  data() {
    return {
      Employees: [

      ],
    };
  },
};
</script>