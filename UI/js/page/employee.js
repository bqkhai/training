$(document).ready(function () {
    let Data = Array.from({ length: 50 }, () => {
        return (
            `<tr>
                <td>MF921</td>
                <td>Bùi Quang Khải</td>
                <td>Nam</td>
                <td>28/07/2000</td>
                <td>0978308894</td>
                <td>18020671@vnu.edu.vn</td>
                <td>Fresher</td>
                <td>Sản xuất</td>
                <td>999999</td>
                <td style="max-width: 100px;">Đang làm</td>
            </tr>`
        )
    });

    $("tbody").html(Data);
});

// Format dữ liệu ngày tháng sang ngày/tháng/năm
// function formatDate(date) {
//     var date = new Date(date);
//     if (Number.isNaN(date.getTime())) {
//         return "";
//     } else {
//         let day = date.getDate()
//         let month = date.getMonth() + 1;
//         let year = date.getFullYear();
//         day = day < 10 ? '0' + day : day;
//         month = month < 10 ? '0' + month : month;
//         return `${day}/${month}/${year}`;
//     }
// }