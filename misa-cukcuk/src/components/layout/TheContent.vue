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
            <input class="select-box-text" value="Tất cả phòng ban" />
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
            <input class="select-box-text" value="Tất cả vị trí" />
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
        />
        <BaseButton
          class="m-second-button m-btn-refresh"
          id="my-btn"
          icon="refresh.png"
        />
      </div>
    </div>
    <TheModal v-show="isModalVisible" @close="closeModal" />
    <BaseTable />
    <BasePagination />
  </div>
</template>

<style lang="css" scoped>

</style>

<script>
import BaseTable from "../base/BaseTable.vue";
import TheModal from "./TheModal.vue";
import BasePagination from "../base/BasePagination.vue";
import BaseButton from "../base/BaseButton.vue";
// import BaseInput from "../base/BaseInput.vue";

export default {
  name: "TheContent",

  components: {
    BaseTable,
    BasePagination,
    TheModal,
    BaseButton,
    // BaseInput,
  },

  created() {},

  props: {},

  data() {
    return {
      isModalVisible: false,
    };
  },

  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>