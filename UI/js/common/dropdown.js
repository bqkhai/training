$(document).ready(function () {
    clickSelectBox();
})

function clickSelectBox() {
    $(`.btn-select-box`).click(function () {
        const dropdownName = `dropdown-box-${$(this).attr('class').split(/\s+/)[1].split('-')[2]}`
        if ($(`.${dropdownName}`).hasClass('hidden')) {
            showDropdown(dropdownName);
        } else {
            hideDropdown(dropdownName);
        }
    })
}

function getSelectedItem(dropdownName) {
    let itemName = dropdownName.split('-')[2];
    let el = $(`.${dropdownName} .dropdown-item .dropdown-item__icon`);
    el.empty();
    el.append('<i class="fa fa-check"></i>')
    $(`.dropdown-item input[name=radio-${itemName}]`).change(function () {
        $(`.btn-dropdown-${itemName}~.select-box-text`).val($(this).val());
        hideDropdown(dropdownName);
    })
}

function hideDropdown(dropdownName) {
    const name = dropdownName.split('-')[2]
    $(`.${dropdownName}`).addClass('hidden');
    $(`.${dropdownName}`).removeClass('show');
    $(`.btn-dropdown-${name} .select-box-icon i`).removeClass('fa-chevron-up')
    $(`.btn-dropdown-${name} .select-box-icon i`).addClass('fa-chevron-down')
}

function showDropdown(dropdownName) {
    $('.dropdown-box').removeClass('show');
    $('.dropdown-box').addClass('hidden');
    $(`.btn-select-box .select-box-icon i`).removeClass('fa-chevron-up')
    $(`.btn-select-box .select-box-icon i`).addClass('fa-chevron-down')
    const name = dropdownName.split('-')[2];
    getSelectedItem(dropdownName)
    $(`.${dropdownName}`).removeClass('hidden');
    $(`.${dropdownName}`).addClass('show');
    $(`.btn-dropdown-${name} .select-box-icon i`).removeClass('fa-chevron-down')
    $(`.btn-dropdown-${name} .select-box-icon i`).addClass('fa-chevron-up')
}