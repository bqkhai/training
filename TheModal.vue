<template>
  <div class="dialog-modal">
    <div class="dialog-content">
      <div class="dialog-header">
        <div class="dialog-header-title">Thông tin nhân viên</div>
        <BaseButton
          class="dialog-header-close"
          id="close-dialog"
          @click="close"
        />
      </div>
      <div class="dialog-body">
        <div class="dialog-img">
          <div class="img-field"></div>
          <div class="img-required">
            (Vui lòng chọn ảnh có định <br />
            dạng <br />.jpg .jpeg .png .gif)
          </div>
        </div>
        <div class="dialog-form">
          <div class="form-group">
            <div class="form-group-title">A. THÔNG TIN CHUNG</div>
            <div class="group-title-underlined"></div>
            <div class="form-row-item">
              <div class="m-row">
                <div class="form-item">
                  <div class="m-label">
                    Mã nhân viên (<span class="required">*</span>)
                  </div>
                  <BaseInput
                    class="m-input"
                    id="txtEmployeeCode"
                    field="EmployeeCode"
                    type="text"
                    required
                    tabindex="1"
                    ref="focus"
                  />
                </div>
                <div class="form-item">
                  <div class="m-label">
                    Họ và tên (<span class="required">*</span>)
                  </div>
                  <div>
                    <BaseInput
                      class="m-input"
                      id="txtFullName"
                      fieldName="FullName"
                      type="text"
                      required
                      tabindex="2"
                    />
                  </div>
                </div>
              </div>
              <div class="m-row">
                <div class="form-item">
                  <div class="m-label">Ngày sinh</div>
                  <div>
                    <BaseInput
                      class="m-input"
                      id="txtDateOfBirth"
                      fieldName="DateOfBirth"
                      type="date"
                      tabindex="3"
                    />
                  </div>
                </div>
                <div class="form-item">
                  <div class="m-label">Giới tính</div>
                  <div class="formadd-select-box">
                    <button class="btn-select-box btn-dropdown-gender">
                      <div class="select-box-icon">
                        <i class="fa fa-chevron-down"></i>
                      </div>
                    </button>
                    <input
                      class="select-box-text"
                      id="cbxGender"
                      fieldName="Gender"
                      value=""
                    />
                    <div class="dropdown-box dropdown-box-gender hidden">
                      <div class="dropdown-item dropdown-item-first">
                        <div class="dropdown-item__icon"></div>
                        <input
                          type="radio"
                          id="radio-gender-1"
                          name="radio-gender"
                          value="Nam"
                          checked
                        />
                        <label for="radio-gender-1">Nam</label>
                      </div>
                      <div class="dropdown-item">
                        <div class="dropdown-item__icon"></div>
                        <input
                          type="radio"
                          id="radio-gender-2"
                          name="radio-gender"
                          value="Nữ"
                        />
                        <label for="radio-gender-2">Nữ</label>
                      </div>
                      <div class="dropdown-item dropdown-item-last">
                        <div class="dropdown-item__icon"></div>
                        <input
                          type="radio"
                          id="radio-gender-3"
                          name="radio-gender"
                          value="Khác"
                        />
                        <label for="radio-gender-3">Khác</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="m-row">
                <div class="form-item">
                  <div class="m-label">
                    Số CMTND/Căn cước (<span class="required">*</span>)
                  </div>
                  <div>
                    <BaseInput
                      class="m-input"
                      id="txtIdentityNumber"
                      fieldName="IdentityNumber"
                      type="number"
                      required
                      tabindex="4"
                    />
                  </div>
                </div>
                <div class="form-item">
                  <div class="m-label">Ngày cấp</div>
                  <div>
                    <BaseInput
                      class="m-input"
                      id="txtIdentityDate"
                      fieldName="IdentityDate"
                      type="date"
                      tabindex="5"
                    />
                  </div>
                </div>
              </div>
              <div class="m-row">
                <div class="form-item">
                  <div class="m-label">Nơi cấp</div>
                  <div>
                    <BaseInput
                      class="m-input"
                      id="txtIdentityPlace"
                      fieldName="IdentityPlace"
                      type="text"
                      tabindex="6"
                    />
                  </div>
                </div>
                <div class="form-item"></div>
              </div>
              <div class="m-row">
                <div class="form-item">
                  <div class="m-label">
                    Email (<span class="required">*</span>)
                  </div>
                  <div>
                    <BaseInput
                      class="m-input"
                      id="txtEmail"
                      type="email"
                      fieldName="Email"
                      placeholder="abc@domain.com"
                      required
                      tabindex="7"
                    />
                  </div>
                </div>
                <div class="form-item">
                  <div class="m-label">
                    Số điện thoại (<span class="required">*</span>)
                  </div>
                  <div>
                    <BaseInput
                      class="m-input"
                      id="txtPhoneNumber"
                      fieldName="PhoneNumber"
                      type="number"
                      required
                      tabindex="8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group-below">
            <div class="form-group-title">B. THÔNG TIN CÔNG VIỆC</div>
            <div class="group-title-underlined"></div>
            <div class="form-row-item">
              <div class="m-row">
                <div class="form-item">
                  <div class="m-label">Vị trí</div>
                  <div class="formadd-select-box">
                    <button class="btn-select-box btn-dropdown-formposition">
                      <div class="select-box-icon">
                        <i class="fa fa-chevron-down"></i>
                      </div>
                    </button>
                    <input
                      class="select-box-text"
                      id="cbxPositionId"
                      fieldName="PositionName"
                      value="Tất cả vị trí"
                    />

                    <div class="dropdown-box dropdown-box-formposition hidden">
                      <div class="dropdown-item dropdown-item-first">
                        <div class="dropdown-item__icon"></div>
                        <input
                          type="radio"
                          id="radio-formposition-0"
                          name="radio-formposition"
                          value="Tất cả vị trí"
                          checked
                        />
                        <label for="radio-formposition-0">Tất cả vị trí</label>
                      </div>
                      <div class="dropdown-item dropdown-item-first">
                        <div class="dropdown-item__icon"></div>
                        <input
                          type="radio"
                          id="radio-formposition-1"
                          name="radio-formposition"
                          value="Giám đốc"
                        />
                        <label for="radio-formposition-1">Giám đốc</label>
                      </div>
                      <div class="dropdown-item">
                        <div class="dropdown-item__icon"></div>
                        <input
                          type="radio"
                          id="radio-formposition-2"
                          name="radio-formposition"
                          value="Phó giám đốc"
                        />
                        <label for="radio-formposition-2">Phó giám đốc</label>
                      </div>
                      <div class="dropdown-item">
                        <div class="dropdown-item__icon"></div>
                        <input
                          type="radio"
                          id="radio-formposition-3"
                          name="radio-formposition"
                          value="Trưởng phòng"
                        />
                        <label for="radio-formposition-3">Trưởng phòng</label>
                      </div>
                      <div class="dropdown-item dropdown-item-last">
                        <div class="dropdown-item__icon"></div>
                        <input
                          type="radio"
                          id="radio-formposition-4"
                          name="radio-formposition"
                          value="Nhân viên"
                        />
                        <label for="radio-formposition-4">Nhân viên</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-item">
                  <div class="m-label">Phòng ban</div>
                  <div class="formadd-select-box">
                    <button class="btn-select-box btn-dropdown-formdepartment">
                      <div class="select-box-icon">
                        <i class="fa fa-chevron-down"></i>
                      </div>
                    </button>
                    <input
                      class="select-box-text"
                      id="cbxDepartmentId"
                      fieldName="DepartmentName"
                      value="Tất cả phòng ban"
                    />

                    <div
                      class="dropdown-box dropdown-box-formdepartment hidden"
                    >
                      <div class="dropdown-item dropdown-item-first">
                        <div class="dropdown-item__icon"></div>
                        <input
                          type="radio"
                          id="radio-formdepartment-0"
                          name="radio-formdepartment"
                          value="Tất cả phòng ban"
                          checked
                        />
                        <label for="radio-formdepartment-0"
                          >Tất cả phòng ban</label
                        >
                      </div>
                      <div class="dropdown-item dropdown-item-first">
                        <div class="dropdown-item__icon"></div>
                        <input
                          type="radio"
                          id="radio-formdepartment-1"
                          name="radio-formdepartment"
                          value="Phòng nhân sự"
                        />
                        <label for="radio-formdepartment-1"
                          >Phòng nhân sự</label
                        >
                      </div>
                      <div class="dropdown-item">
                        <div class="dropdown-item__icon"></div>
                        <input
                          type="radio"
                          id="radio-formdepartment-2"
                          name="radio-formdepartment"
                          value="Phòng sản xuất"
                        />
                        <label for="radio-formdepartment-2"
                          >Phòng sản xuất</label
                        >
                      </div>
                      <div class="dropdown-item dropdown-item-last">
                        <div class="dropdown-item__icon"></div>
                        <input
                          type="radio"
                          id="radio-formdepartment-3"
                          name="radio-formdepartment"
                          value="Phòng nghiên cứu"
                        />
                        <label for="radio-formdepartment-3"
                          >Phòng nghiên cứu</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="m-row">
                <div class="form-item">
                  <div class="m-label">Mã số thuế cá nhân</div>
                  <div>
                    <BaseInput
                      class="m-input"
                      id="txtPersonalTaxCode"
                      fieldName="PersonalTaxCode"
                      type="text"
                      tabindex="11"
                    />
                  </div>
                </div>
                <div class="form-item">
                  <div class="m-label">Mức lương cơ bản</div>
                  <div class="form-item-salary">
                    <BaseInput
                      class="m-input"
                      id="txtSalary"
                      fieldName="Salary"
                      type="text"
                      style="text-align: right"
                      placeholder="VNĐ"
                      tabindex="12"
                    />
                  </div>
                </div>
              </div>
              <div class="m-row">
                <div class="form-item">
                  <div class="m-label">Ngày gia nhập công ty</div>
                  <div>
                    <BaseInput
                      class="m-input"
                      id="txtJoinDate"
                      fieldName="JoinDate"
                      type="date"
                      tabindex="13"
                    />
                  </div>
                </div>
                <div class="form-item">
                  <div class="m-label">Tình trạng công việc</div>
                  <div class="formadd-select-box">
                    <button class="btn-select-box btn-dropdown-workstatus">
                      <div class="select-box-icon">
                        <i class="fa fa-chevron-down"></i>
                      </div>
                    </button>
                    <input
                      class="select-box-text"
                      id="cbxWorkStatus"
                      fieldName="WorkStatus"
                      value="Đang làm việc"
                    />

                    <div class="dropdown-box dropdown-box-workstatus hidden">
                      <div class="dropdown-item dropdown-item-first">
                        <div class="dropdown-item__icon"></div>
                        <input
                          type="radio"
                          id="radio-workstatus-1"
                          name="radio-workstatus"
                          value="Đang làm việc"
                          checked
                        />
                        <label for="radio-workstatus-1">Đang làm việc</label>
                      </div>
                      <div class="dropdown-item dropdown-item-last">
                        <div class="dropdown-item__icon"></div>
                        <input
                          type="radio"
                          id="radio-workstatus-3"
                          name="radio-workstatus"
                          value="Đã nghỉ việc"
                        />
                        <label for="radio-workstatus-3">Đã nghỉ việc</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dialog-footer">
        <BaseButton
          class="btn-cancel btn-cancel-box"
          type="submit"
          buttonName="Hủy"
          @click="close"
          id="btnCancel"
        />
        <BaseButton
          class="add-btn btn-save-box"
          buttonName="Lưu thay đổi"
          icon="save-icon.png"
        />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
</style>

<script>
import BaseButton from "../base/BaseButton.vue";
import BaseInput from "../base/BaseInput.vue";
export default {
  name: "TheModal",
  components: {
    BaseButton,
    BaseInput,
  },
  props: {},
  methods: {
    // đóng form dialog
    close() {
      this.$emit("close");
    },
    //focus vào ô đầu tiên
    focusInput() {
      this.$refs.focus.$el.focus();
    },
  },
  data() {
    return {};
  },
};
</script>