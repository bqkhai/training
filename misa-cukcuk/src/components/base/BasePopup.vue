<template>
  <div class="m-popup hide-popup" id="popup">
    <div class="popup-modal"></div>
    <div class="popup-box">
      <div class="popup-header">
        <div class="popup-title">Cảnh báo</div>
        <div class="popup-close" @click="onClosePopup"></div>
      </div>
      <div class="popup-body">
        <div class="popup-left-icon"></div>
        <div class="popup-text">
          <p>Bạn có chắc muốn đóng form nhập <b>"Thông tin chung của</b></p>
          <p><b>thủ tục 603"</b> hay không?</p>
        </div>
      </div>
      <div class="popup-footer">
        <button
          id="btn-cancel-popup"
          class="m-second-button btn-cancel-popup"
          @click="onConfirmPopup"
        >
          Tiếp tục nhập
        </button>
        <button id="btn-close" class="btn-close" @click="onClosePopup">
          Đóng
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",

  methods: {
    onClosePopup() {
      this.$emit("close-popup");
    },
    onConfirmPopup() {
      this.$emit("confirm-popup");
    },
  },
};
</script>