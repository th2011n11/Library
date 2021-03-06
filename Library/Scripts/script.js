﻿
$(document).ready(function () {

    //highlight row
    $('#list_DG tr').mouseover(function () {
        $(this).css('background-color', 'white');
    })
        .mouseout(function () {
            $(this).css('background-color', '');
        });

    //validate search form
    $('#dg_search').submit(function () {
        var form = $('#dg_search');
        if ($("[name='madg']", form).val() == "" && $("[name='ten']", form).val() == "" && $("[name='sdt']", form).val() == "") {
            $('.notice_QL').prop('hidden', false);
            return false;
        }
        else {
            $('.notice_QL').prop('hidden', true);
            return true;
        }
    });

    //row click event
    $('#list_DG tr').click(function () {
        var serverURL = "/QLDocGia/GetInfor/" + this.id;
        $.get(serverURL, function (data) {
            $('#content_QLDG1').html(data);
            $('#CN_QL').prop("disabled", false);
            $('#btnDel_QLForm').prop("disabled", false);
        });
    });

    //submit form
    $('#btnFormTK').click(function () {
        var list_input = $('#form_tk input');
        var notice = $('.noticeform_TK');
        var k = 0;
        for (var i = 0; i < 2; i++)
            if (list_input[i].value == "") {
                notice[i].hidden = false;
                k = 1;
            }
            else
                notice[i].hidden = true;
        var list = $('#form_tk input:radio');
        var tk1 = 0;
        for (var i = 0; i < list.length; i++)
            if (list[i].checked == true)
                tk1 = i + 1;
        if (tk1 == 0) {
            notice[2].hidden = false;
            k = 1;
        }
        else
            notice[2].hidden = true;
        if (k == 1)
            return;

        var input = [$('#tngay').val(), $('#dngay').val(), $('#loai').val(), tk1];

        $.ajax({
            url: '/QLDocGia/Chart',
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(input),
            success: function (output) {
                //alert("success");
                if (output.length!=0) {
                    var a = [];
                    var b = []
                    $(output).each(function (i, item) {
                        a.push(item.time);
                        b.push(item.data);
                    })

                    var barChartData = {
                        labels: a,
                        datasets: [
                            {
                                fillColor: "rgba(150,220,220,0.75)",
                                strokeColor: "rgba(151,187,205,0.8)",
                                highlightFill: "rgba(151,187,205,0.75)",
                                highlightStroke: "rgba(151,187,205,1)",
                                data: b
                            },
                        ]
                    }

                    //draw a chart

                    var ctx = document.getElementById("canvas").getContext("2d");
                    window.myBar = new Chart(ctx).Bar(barChartData, {
                        responsive: true
                    });
                    $('#detailTK').prop("hidden", false);
                }
                else
                    window.alert("Khong co du lieu!");
            },
            error: function (result) {
                alert("Failed");
            }
        });
    });

    $('#detailTK').click(function () {
        var list = $('#form_tk input:radio');
        var tk1 = 0;
        for (var i = 0; i < list.length; i++) {
            if (list[i].checked == true)
                tk1 = i + 1;
        }

        var serverURL = "/QLDocGia/rsThongke?tngay=" + $('#tngay').val() + "&dngay=" + $('#dngay').val() + "&loai=" + $('#loai').val() + "&tk=" + tk1;
        window.open(serverURL, '_blank');
    });

});

//btn cập nhật
function enable() {
    $('.QL_form').prop("disabled", false);
    $('#sm_QLForm').prop("disabled", false);
}

//btn Thêm mới
function clearInfor() {
    $('.QL_form').prop("value", "");
    $('#TM_QL').prop("disabled", true);
    $('.QL_form').prop("disabled", false);
    $('#id_stored').val($('#idmax').text());
    $('#sm_QLForm').prop("disabled", false);
    $('#CN_QL').prop("disabled", true);
    $('#btnDel_QLForm').prop("disabled", true);
}

function btnDelete() {
    var rsval = confirm("Ban chac chan muon xoa?");
    if (rsval == true)
        window.location.href = '/QLDocGia/del/' + $('#id_stored').val();
    else
        return;
}

//QL_from
function validate() {
    var list_input = $('.QL_form');
    var notice = $('.noticeform_QL');
    var k = 0;
    for (var i = 0; i < list_input.length - 1; i++)
        if (list_input[i].value == "") {
            notice[i].hidden = false;
            k = 1;
        }
        else {
            notice[i].hidden = true;
        }
    if ($('#QLDG_form input:radio')[0].checked == false && $('#QLDG_form input:radio')[1].checked == false) {
        notice[8].hidden = false;
        k = 1;
    }
    else
        notice[8].hidden = true;

    if (k == 0)
        return true;
    else
        return false;
}