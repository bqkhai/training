<template>
  <div class="content">
    <div class="header-content">
      <div class="title">Danh sách nhân viên</div>
      <BaseButton
        class="add-btn m-btn-default"
        id="btnAdd"
        buttonName="Thêm nhân viên"
        icon="add.png"
        @click="showModal"
      />
    </div>
    <div class="filter-bar">
      <div class="filter-left">
        <div class="search-input">
          <input
            class="icon-search input-search"
            type="text"
            placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại"
            onblur="this.placeholder='Tìm kiếm theo Mã, Tên hoặc Số điện thoại'"
            onfocus="this.placeholder=''"
            style="width: 240px"
          />
        </div>
        <div class="filter-input">
          <div class="select-box">
            <button class="btn-select-box btn-dropdown-departement">
              <div class="select-box-icon">
                <i class="fa fa-chevron-down"></i>
              </div>
            </button>
            <input class="select-box-text" value="" />
            <div class="dropdown-box dropdown-box-departement hidden">
              <div class="dropdown-item dropdown-item-first">
                <div class="dropdown-item__icon"></div>
                <input
                  type="radio"
                  id="radio-departement-1"
                  name="radio-departement"
                  value="Tất cả phòng ban"
                  checked
                />
                <label for="radio-departement-1">Tất cả phòng ban</label>
              </div>
              <div class="dropdown-item">
                <div class="dropdown-item__icon"></div>
                <input
                  type="radio"
                  id="radio-departement-2"
                  name="radio-departement"
                  value="Phòng nhân sự"
                />
                <label for="radio-departement-2">Phòng nhân sự</label>
              </div>
              <div class="dropdown-item">
                <div class="dropdown-item__icon"></div>
                <input
                  type="radio"
                  id="radio-departement-3"
                  name="radio-departement"
                  value="Phòng sản xuất"
                />
                <label for="radio-departement-3">Phòng sản xuất</label>
              </div>
              <div class="dropdown-item">
                <div class="dropdown-item__icon"></div>
                <input
                  type="radio"
                  id="radio-departement-4"
                  name="radio-departement"
                  value="Phòng marketing"
                />
                <label for="radio-departement-4">Phòng marketing</label>
              </div>
              <div class="dropdown-item">
                <div class="dropdown-item__icon"></div>
                <input
                  type="radio"
                  id="radio-departement-5"
                  name="radio-departement"
                  value="Phòng ..."
                />
                <label for="radio-departement-5">Phòng ...</label>
              </div>
              <div class="dropdown-item dropdown-item-last">
                <div class="dropdown-item__icon"></div>
                <input
                  type="radio"
                  id="radio-departement-6"
                  name="radio-departement"
                  value="Phòng nghiên cứu"
                />
                <label for="radio-departement-6">Phòng nghiên cứu</label>
              </div>
            </div>
          </div>
          <div class="select-box">
            <button class="btn-select-box btn-dropdown-position">
              <div class="select-box-icon">
                <i class="fa fa-chevron-down"></i>
              </div>
            </button>
            <input class="select-box-text" value="" />
            <div class="dropdown-box dropdown-box-position hidden">
              <div class="dropdown-item dropdown-item-first">
                <div class="dropdown-item__icon"></div>
                <input
                  type="radio"
                  id="radio-position-1"
                  name="radio-position"
                  value="Tất cả vị trí"
                  checked
                />
                <label for="radio-position-1">Tất cả vị trí</label>
              </div>
              <div class="dropdown-item">
                <div class="dropdown-item__icon"></div>
                <input
                  type="radio"
                  id="radio-position-2"
                  name="radio-position"
                  value="Giám đốc"
                />
                <label for="radio-position-2">Giám đốc</label>
              </div>
              <div class="dropdown-item">
                <div class="dropdown-item__icon"></div>
                <input
                  type="radio"
                  id="radio-position-3"
                  name="radio-position"
                  value="Phó giám đốc"
                />
                <label for="radio-position-3">Phó giám đốc</label>
              </div>
              <div class="dropdown-item">
                <div class="dropdown-item__icon"></div>
                <input
                  type="radio"
                  id="radio-position-4"
                  name="radio-position"
                  value="Trưởng phòng"
                />
                <label for="radio-position-4">Trưởng phòng</label>
              </div>
              <div class="dropdown-item">
                <div class="dropdown-item__icon"></div>
                <input
                  type="radio"
                  id="radio-position-5"
                  name="radio-position"
                  value="EM"
                />
                <label for="radio-position-5">EM</label>
              </div>
              <div class="dropdown-item dropdown-item-last">
                <div class="dropdown-item__icon"></div>
                <input
                  type="radio"
                  id="radio-position-6"
                  name="radio-position"
                  value="Nhân viên"
                />
                <label for="radio-position-6">Nhân viên</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="filter-right">
        <BaseButton
          class="m-second-button m-btn-delete"
          id="btn-delete"
          icon="delete-icon.png"
          @click="deleteEmployee()"
        />
        <BaseButton
          class="m-second-button m-btn-refresh"
          id="my-btn"
          icon="refresh.png"
          @click="refreshData()"
        />
      </div>
    </div>
    <div class="grid-header">
      <table id="tbListData" border="0" width="100%" cellspacing="0">
        <thead>
          <th></th>
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
          <!-- @click="rowClick(employee.EmployeeId)" -->
          <tr
            v-for="employee in Employees"
            :key="employee.EmployeeId"
            @dblclick="rowDblClick(employee)"
            @click="
              checked.includes(employee.EmployeeId)
                ? checked.pop(employee.EmployeeId)
                : checked.push(employee.EmployeeId)
            "
          >
            <td>
              <input
                type="checkbox"
                v-model="checked"
                :value="employee.EmployeeId"
              />
            </td>
            <td>{{ employee.EmployeeCode }}</td>
            <td>{{ employee.FullName }}</td>
            <td>{{ employee.GenderName }}</td>
            <td style="text-align: center">
              {{ employee.DateOfBirth | formatDate}}
            </td>
            <td>{{ employee.PhoneNumber }}</td>
            <td style="max-width: 250px">{{ employee.Email }}</td>
            <td style="max-width: 250px">{{ employee.PositionName }}</td>
            <td style="max-width: 250px">{{ employee.DepartmentName }}</td>
            <td style="max-width: 100px; text-align: right">
              {{ employee.Salary | formatSalary }}
            </td>
            <td>{{ employee.WorkStatus | formatWorkStatus }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <EmployeeDetail
      v-show="isModalVisible"
      @close="closeModal"
      :employee="employeeData"
      :formMode="statusForm"
    />
    <BasePagination />
  </div>
</template>

<style lang="css" scoped>
</style>

<script>
import EmployeeDetail from "./EmployeeDetail.vue";
import BasePagination from "../../components/base/BasePagination.vue";
import BaseButton from "../../components/base/BaseButton.vue";

import axios from "axios";
import moment from "moment";
import numeral from "numeral";

export default {
  name: "Employee",

  components: {
    BasePagination,
    EmployeeDetail,
    BaseButton,
  },

  created() {
    this.getData();
    this.refreshData();
  },

  props: {},

  data() {
    return {
      Employees: [],
      checked: [],
      employeeData:{},
      data: {},
      isModalVisible: false,
      statusForm: "",
    };
  },

  methods: {
    //hiện form dialog
    showModal() {
      this.isModalVisible = true;
      this.statusForm = 'ADD';
      console.log(this.statusForm)
    },

    //ẩn form dialog
    closeModal() {
      this.isModalVisible = false;
    },

    /**
     * Load data cho bảng
     * Author: bqkhai (19/7/2021)
     */
    async getData() {
      const res = await axios.get("http://cukcuk.manhnv.net/v1/Employees/");
      this.Employees = res.data;
      console.log(res);
    },

    /**
     * Hàm refresh data bảng
     * Author: bqkhai (20/7/2021)
     */
    refreshData() {
      this.Employees = "";
      for (let i in this.checked){
        this.checked.pop(this.checked[i])
      }
      this.getData();
    },

    /**
     * Hàm sự kiện dblclick vào hàng trong bảng
     * Author: bqkhai (19/7/2021)
     */
    rowDblClick(emp) {
      this.isModalVisible = true;
      this.statusForm = 'EDIT';
      this.employeeData = emp;
      console.log(emp.DateOfBirth);
      console.log(this.statusForm)
    },

    /**
     * Hàm xóa nhân viên
     * Author: bqkhai (19/7/2021)
     */
    deleteEmployee() {
      if (confirm("Bạn có muốn xóa không")) {
        for (let i in this.checked) {
          axios
            .delete("http://cukcuk.manhnv.net/v1/Employees/" + this.checked[i])
            .then(res => {
              console.log(res);
              this.refreshData();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
      return;
    },
  },

  filters: {
    /**
     * Định dạng ngày tháng
     * Author: bqkhai (16/7/2021)
     */
    formatDate: function (date) {
      return moment(String(date)).format("DD/MM/YYYY");
    },

    /**
     * Định dạng giới tính
     * Author: bqkhai (16/7/2021)
     */
    formatGender: function (genderCode) {
      if (genderCode == null || genderCode == 3) return "";
      else if (genderCode == 0) return "Nữ";
      else if (genderCode == 1) return "Nam";
      else if (genderCode == 2) return "Khác";
    },

    /**
     * Định dạng tiền tệ
     * Author: bqkhai (16/7/2021)
     */
    formatSalary: function (salary) {
      if (Number.isInteger(salary)) {
        return numeral(salary).format(0.0).replaceAll(",", ".");
      } else {
        return "Không xác định";
      }
    },

    /**
     * Định dạng trạng thái công việc
     * Author: bqkhai (16/7/2021)
     */
    formatWorkStatus: function (status) {
      if (status == 1) return "Đang làm việc";
      else if (status == 2) return "Đã nghỉ việc";
      else return "Không xác định";
    },
  },
};
</script>