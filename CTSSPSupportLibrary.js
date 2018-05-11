//JS file for Support Library functions
//Created By : M K 
//To set min date as today
function setTerminationDateToday() {
    $('#Termination_Date__8_date').datetimepicker("option", "minDate", new Date(Date.now()));
}

//Created By : M K 
//To reset the control values
function resetControlValueOnTabChange() {
    $('#Get_Requested_Name_2_txt').val("");
    $('#First_Name_3_txt').val("");
    $('#MI_4_txt').val("");
    $('#Last_Name_5_txt').val("");
    $('#Email_Address_6_txt').val("");
    $('#PhoneNumbe_1_txt').val("");
    $('#Termination_Date__8_date').val("");
    $('#chk0RemoveAllA_9_checkbox_grp').prop('checked', false);
    $('#div1_DisplayRequestedFo_10_locationinfo tbody label').empty();
}


//Author : M V
//Purpose : To hide controls
//Parameters : controlsCommaSeperated
// controlsCommaSeperated = List the controls with comma seperated
//Date of creation : Feb-2018

function hideControls(controlsCommaSeperated) {
    var controlList = controlsCommaSeperated.split(',');
    for (i = 0; i < controlList.length; i++) {
        var tempControl = controlList[i];
        //$('[data-controlid="' + tempControl + '"]').closest('.drop-zone').hide();

        if (tempControl.indexOf("_Container") >= 0) {
            $('#' + tempControl).closest('.drop-zone').hide();
        } else {
            $('[data-controlid="' + tempControl + '"]').closest('.drop-zone').hide();
        }
    }
}

//Author : M V
//Purpose : To hide controls
//Parameters : controlsCommaSeperated
// controlsCommaSeperated = List the controls with comma seperated
//Date of creation : Feb-2018

function hideControlsIfEmpty(controlsCommaSeperated) {
    var controlList = controlsCommaSeperated.split(',');
    for (i = 0; i < controlList.length; i++) {
        var tempControl = controlList[i];
        //$('[data-controlid="' + tempControl + '"]').closest('.drop-zone').hide();

        if (tempControl.indexOf("_Container") >= 0) {
            $('#' + tempControl).closest('.drop-zone').hide();
        } else {
            if ($('[data-controlid="' + tempControl + '"]').val() == "") {
                $('[data-controlid="' + tempControl + '"]').closest('.drop-zone').hide();
            }
        }
    }
}

//Author : M V
//Purpose : To show controls
//Parameters : controlsCommaSeperated
// controlsCommaSeperated = List the controls with comma seperated
//Date of creation : Feb-2018
function showControls(controlsCommaSeperated) {
    var controlList = controlsCommaSeperated.split(',');
    for (i = 0; i < controlList.length; i++) {
        var tempControl = controlList[i];

        if (tempControl.indexOf("_Container") >= 0) {
            $('#' + tempControl).closest('.drop-zone').show();
        } else {
            $('[data-controlid="' + tempControl + '"]').closest('.drop-zone').show();
        }
    }
}

//Author : M V
//Purpose : To map controls
//Parameters : controlsCommaSeperated
// controlsCommaSeperated = List the controls with comma seperated
//Date of creation : Feb-2018
function mapControls(controlsCommaSeperated, isDisable) {
    var controlList = controlsCommaSeperated.split(',');
    for (i = 0; i < controlList.length; i++) {
        var tempControl = controlList[i].split(":");
        $('[data-controlid="' + tempControl[1] + '"]').val($('[data-controlid="' + tempControl[0] + '"]').val());

        if (isDisable) {
            disableControls(tempControl[1]);
        }
    }
}

//Author : M V
//Purpose : To reset controls
//Parameters : controlsCommaSeperated
//controlsCommaSeperated = List the controls with comma seperated
//Date of creation : Feb-2018
function resetControls(controlsCommaSeperated) {
    var controlList = controlsCommaSeperated.split(',');
    for (i = 0; i < controlList.length; i++) {
        var tempControl = controlList[i];

        if (tempControl.indexOf("_Container") >= 0) {
            $('#' + tempControl).find("input").prop("checked", false);
        } else if (tempControl.indexOf("_locationinfo") >= 0) {
            $('#' + tempControl).find(".locationinfolabel").empty();
        } else {
            $('[data-controlid="' + tempControl + '"]').val('');
        }
    }
}

//Author : M V
//Purpose : To disable controls
//Parameters : controlsCommaSeperated
// controlsCommaSeperated = List the controls with comma seperated
//Date of creation : Feb-2018
function disableControls(controlsCommaSeperated) {
    var controlList = controlsCommaSeperated.split(',');
    for (i = 0; i < controlList.length; i++) {
        var tempControl = controlList[i];

        if (tempControl.indexOf("_Container") >= 0) {
            $('#' + tempControl).find("input").prop("disabled", true);
        } else {
            $('[data-controlid="' + tempControl + '"]').prop('disabled', true);
        }

    }
}

//Author : M V
//Purpose : To enable controls
//Parameters : controlsCommaSeperated
// controlsCommaSeperated = List the controls with comma seperated
//Date of creation : Feb-2018
function enableControls(controlsCommaSeperated) {
    var controlList = controlsCommaSeperated.split(',');
    for (i = 0; i < controlList.length; i++) {
        var tempControl = controlList[i];

        if (tempControl.indexOf("_Container") >= 0) {
            $('#' + tempControl).find("input").prop("disabled", false);
        } else {
            $('[data-controlid="' + tempControl + '"]').prop('disabled', false);
        }
    }
}


//Author : M V
//Purpose : To close the popup form
//Date of creation : Feb-2018
function cancelPopup() {
    var formSk = getParameterByName("fid");
    var _popUpOpenerControlId = formView.popUpInfo.popUpOpenerId;

    var _ctxt = formView.popUpInfo.context;
    $(_ctxt).find('#' + _popUpOpenerControlId);
    var _popModalId = parent.window.PopupIDs[formSk];
    if (_popModalId == undefined || _popModalId == null || _popModalId == "")
        popModalId = $('#popUpId').val();
    parent.$('#' + _popModalId).modal('hide');

    var _popOpenerElement = _ctxt.$("[id='" + _popUpOpenerControlId + "']");
    if (_popOpenerElement.prop("tagName") == "INPUT") {
        _popOpenerElement.prop('checked', false);
        _popOpenerElement.removeAttr("data-ispopupdatabinded");
        _popOpenerElement.trigger('change.cwPopUp');
        _popOpenerElement.trigger('clear.cwPopUp');
    } else {
        _popOpenerElement.val('');
        _popOpenerElement.removeAttr("data-ispopupdatabinded");
        _popOpenerElement.trigger('change.cwPopUp');
        _popOpenerElement.trigger('clear.cwPopUp');
    }
    if (formSk && formSk != "") {
        if (parent.window.PopupIDs && parent.window.PopupIDs != null) {
            delete parent.window.PopupIDs[formSk];
        }
    }
}


//Author : M V
//Purpose : To load  controls as tab
//Parameters : formSequenceNo, tabTextBox, sortedAnchorListCommaSeperated, sortedButtonListCommaSeperated
//formSequenceNo= current form sequence no, tabTextBox = Text Box which maintain the form stage, sortedAnchorListCommaSeperated= List the anchor ID in ascending order, sortedButtonListCommaSeperated=List the anchor ID in ascending order
//Date of creation : 13-Feb-2018
function tabLoadProcessTest(formSequenceNo, tabTextBox, sortedAnchorListCommaSeperated, sortedButtonListCommaSeperated) {
    // To Load current form no in text box
    var existingFormNo = $("[data-controlid='" + tabTextBox + "']").val();
    var currentFormNo = 0;
    if (existingFormNo > formSequenceNo) {
        currentFormNo = existingFormNo;
    }
    else {
        currentFormNo = formSequenceNo;
        $("[data-controlid='" + tabTextBox + "']").val(formSequenceNo);
    }


    // Enable and Disable button
    var anchorList = sortedAnchorListCommaSeperated.split(",");
    var buttonList = sortedButtonListCommaSeperated.split(",");
    for (i = 1; i < anchorList.length + 1; i++) {
        $("[data-controlid='" + buttonList[i - 1] + "']").closest('.drop-zone').hide();
        if (i <= currentFormNo) {
            //$('[data-controlid="' + buttonList[i - 1] + '"]').removeAttr('disabled', 'disabled').css({ 'pointer-events': '' });
            $('#' + anchorList[i - 1]).removeClass("button-primary");
            $('#' + anchorList[i - 1]).removeClass("btn-custom");
            $('#' + anchorList[i - 1]).removeClass("tab_disabled");
            $('#' + anchorList[i - 1]).removeClass("tab_active");
            $('#' + anchorList[i - 1]).removeClass("custom_tab");
            $('#' + anchorList[i - 1]).addClass("custom_tab");
            $('#' + anchorList[i - 1]).addClass("tab_active");
            //$('#' + buttonList[i - 1] ).closest('.drop-zone').css("margin-right", "-50px");
        }
        else {
            //$('[data-controlid="' + buttonList[i - 1] + '"]').attr('disabled', 'disabled').css({ 'pointer-events': 'none' });
            $('#' + anchorList[i - 1]).removeClass("button-primary");
            $('#' + anchorList[i - 1]).removeClass("btn-custom");
            $('#' + anchorList[i - 1]).removeClass("tab_disabled");
            $('#' + anchorList[i - 1]).removeClass("tab_active");
            $('#' + anchorList[i - 1]).removeClass("custom_tab");
            $('#' + anchorList[i - 1]).addClass("tab_active");
            $('#' + anchorList[i - 1]).addClass("custom_tab");
            $('#' + anchorList[i - 1]).addClass("tab_disabled");
            // $("[data-controlid='" + buttonList[i - 1] + "']").closest('.drop-zone').css("margin-right", "-50px");
        }
    }

    //To highlight the current tab
    var controlId = anchorList[formSequenceNo - 1];
    $('#' + controlId).removeClass("tab_disabled");
    $('#' + controlId).removeClass("tab_active");
    $('#' + controlId).removeClass("custom_tab");
    $('#' + controlId).addClass("custom_tab");

    //To bind click event
    for (i = 0; i < anchorList.length ; i++) {
        $("#" + anchorList[i]).click(function () {
            $("[data-controlid='" + sortedButtonListCommaSeperated.split(",")[sortedAnchorListCommaSeperated.split(",").indexOf($(this).attr("id"))] + "']").click();
        });
    }

}

//Author : M V
//Purpose : To load  controls in tab
//Parameters : formSequenceNo, tabTextBox, sortedButtonListCommaSeperated
//formSequenceNo= current form sequence no, tabTextBox = Text Box which maintain the form stage, sortedButtonListCommaSeperated=List the anchor ID in ascending order
//Date of creation : 13-Feb-2018
function tabLoadProcess(formSequenceNo, tabTextBox, sortedButtonListCommaSeperated) {
    // To Load current form no in text box
    var existingFormNo = $("[data-controlid='" + tabTextBox + "']").val();
    var currentFormNo = 0;
    if (existingFormNo > formSequenceNo) {
        currentFormNo = existingFormNo;
    }
    else {
        currentFormNo = formSequenceNo;
        $("[data-controlid='" + tabTextBox + "']").val(formSequenceNo);
    }


    // Enable and Disable button
    var buttonList = sortedButtonListCommaSeperated.split(",");
    for (i = 1; i < buttonList.length + 1; i++) {
        if (i <= currentFormNo) {
            //$('[data-controlid="' + buttonList[i - 1] + '"]').removeAttr('disabled', 'disabled').css({ 'pointer-events': '' });
            $('[data-controlid="' + buttonList[i - 1] + '"]').removeClass("button-primary");
            $('[data-controlid="' + buttonList[i - 1] + '"]').removeClass("btn-custom");
            $('[data-controlid="' + buttonList[i - 1] + '"]').addClass("custom_tab");
            $("[data-controlid='" + buttonList[i - 1] + "']").closest('.drop-zone').css("margin-right", "-50px");
        }
        else {
            //$('[data-controlid="' + buttonList[i - 1] + '"]').attr('disabled', 'disabled').css({ 'pointer-events': 'none' });
            $('[data-controlid="' + buttonList[i - 1] + '"]').removeClass("button-primary");
            $('[data-controlid="' + buttonList[i - 1] + '"]').removeClass("btn-custom");
            $('[data-controlid="' + buttonList[i - 1] + '"]').addClass("custom_tab");
            $('[data-controlid="' + buttonList[i - 1] + '"]').addClass("tab_active");
            $('[data-controlid="' + buttonList[i - 1] + '"]').addClass("tab_disabled");
            $("[data-controlid='" + buttonList[i - 1] + "']").closest('.drop-zone').css("margin-right", "-50px");
        }
    }

    // To make button as tab
    var controlId = buttonList[formSequenceNo - 1];
    //$("[data-controlid='" + controlId + "']").closest('.row').find('label').hide();
    //$("[data-controlid='" + controlId + "']").closest('.row').css({
    //    "border-radius": "20px",
    //    "background": "#E7F2F9",
    //    "height": "35px"
    //});
    $('[data-controlid="' + controlId + '"]').addClass("tab_active");

}

//Added by: M V
//To be removed
function loadBrowserTitle(titleText) {
    $(document).prop('title', titleText);
}

//Author : M V
//Purpose : To reload Grid controls
//Parameters : gridID
//gridID= pass grid ID
//Date of creation : 13-Feb-2018
function loadGrid(gridID) {
    $("#" + gridID).DataTable().destroy();
    if (formView.ctrlArray != undefined) {
        $.each(formView.ctrlArray, function (index, control) {
            if (index = gridID) {
                var $controlModel = JSON.parse(control);
                if ($controlModel.CommonProperties.ControlType != undefined && $controlModel.CommonProperties.ControlType == "grid") {
                    setGridDataTableForSql($controlModel, suffix);
                }
            }
        });

    }
}

//Author : M V
//Purpose : To reload Grid controls
//Parameters : gridID
//gridID= pass grid ID
//Date of creation : 13-Feb-2018
function IAMloadGrid(gridID) {
    var gridList = gridID.split(",");
    for (i = 0; i < gridList.length; i++) {
        $("#" + gridList[i]).DataTable().destroy();
    }

    if (formView.ctrlArray != undefined) {
        $.each(formView.ctrlArray, function (index, control) {
            //if (index = gridID) {
            var $controlModel = JSON.parse(control);
            if ($controlModel.CommonProperties.ControlType != undefined && $controlModel.CommonProperties.ControlType == "grid") {
                setGridDataTableForSql($controlModel, suffix);
            }
            // }
        });

    }
}


//Author : M V
//Purpose : To reload Grid controls
//Parameters : gridID
//gridID= pass grid ID
//Date of creation : 13-Feb-2018
function CTSIAMOnLoad() {
    $('[data-controlid="RequesterFullName"]').val(GetUserName());
    setTimeout(function () {
        $('[data-controlid="RequestedBySearch"]').click();
        IAMloadGrid('IAMSTAGE_G_2grid,IAMDATABAS_3grid');

        //Data base Grid
        $("#IAMDATABAS_3grid thead tr").find(":eq(6)").hide();

        $("#IAMDATABAS_3grid tbody tr").each(function () {

            $(this).find(":eq(6)").hide();

            if ($(this).find(":eq(4)").text() == "") {
                $(this).find(":eq(4)").text("Password Expired");
                $(this).find(":eq(4)").css("color", "red");
            }
            else {
                $(this).find(":eq(4)").text('');
                $(this).find(":eq(4)").append("<a target='_blank'  class='showpwd btn btn-warning'>Show Password</a>");
            }
        });

        //Data base Grid Paginate
        $("#IAMDATABAS_3grid_paginate").click(function () {
            $("#IAMDATABAS_3grid thead tr").find(":eq(6)").hide();

            $("#IAMDATABAS_3grid tbody tr").each(function () {

                $(this).find(":eq(6)").hide();

                if ($(this).find(":eq(4)").text() == "") {
                    $(this).find(":eq(4)").text("Password Expired");
                    $(this).find(":eq(4)").css("color", "red");
                }
                else {
                    $(this).find(":eq(4)").text('');
                    $(this).find(":eq(4)").append("<a target='_blank'  class='showpwd btn btn-warning'>Show Password</a>");
                }
            });
        });

        //Stage Grid   
        $("#IAMSTAGE_G_2grid thead tr").find(":eq(7)").hide();

        $("#IAMSTAGE_G_2grid tbody tr").each(function () {

            $(this).find(":eq(7)").hide();

            var temp1 = $(this).find(":eq(1)").text();
            $(this).find(":eq(1)").text('');
            $(this).find(":eq(1)").append('<div style="cursor:help;" title="' + $(this).find(":eq(7)").text() + '">' + temp1 + '</div>');

            var temp2 = $(this).find(":eq(4)").text();
            $(this).find(":eq(4)").text('');
            $(this).find(":eq(4)").append('<div style="cursor:help;" title="">' + temp2 + '</div>');

        });

        //Stage Page Grid
        $("#IAMSTAGE_G_2grid_paginate").click(function () {

            $("#IAMSTAGE_G_2grid thead tr").find(":eq(7)").hide();

            $("#IAMSTAGE_G_2grid tbody tr").each(function () {

                $(this).find(":eq(7)").hide();

                var temp1 = $(this).find(":eq(1)").text();
                $(this).find(":eq(1)").text('');
                $(this).find(":eq(1)").append('<div style="cursor:help;" title="' + $(this).find(":eq(7)").text() + '">' + temp1 + '</div>');

                var temp2 = $(this).find(":eq(4)").text();
                $(this).find(":eq(4)").text('');
                $(this).find(":eq(4)").append('<div style="cursor:help;" title="">' + temp2 + '</div>');

            });
        });

        $(".showpwd").click(function () {

            $('[data-controlid="EncryptedPassword"]').val($(this).closest("tr").find(":nth(7)").text());

            $(this).closest("tr").find(":nth(5)").hide();

            $('[data-controlid="PWDSearch"]').click();
            //setTimeout(function () {
            $(this).closest("tr").find(":nth(4)").text($('[data-controlid="DecryptPassword"]').val());
            //}, 50);
        });

    }, 10);



}

//Author : M V
//Purpose : To create custom popup -- Yet to release
//Parameters : controlIDList, genareteClass,genaretePopID
//controlIDList= List the single control id for a each row, genareteClass = dynamic class name to be added for those rows,genaretePopID=dynamic id to be added for those rows
//Date of creation : 13-Feb-2018
function customPopup(controlIDList, genareteClass, genaretePopID) {
    var controlList = controlIDList.split(',');
    for (i = 0; i < controlList.length; i++) {
        var tempControl = controlList[i];
        $('[data-controlid="' + tempControl + '"]').closest(".row").addClass(genareteClass);

    }
    $("." + genareteClass).wrapAll("<div id='" + genaretePopID + "' class='modal' style='background:white;height:300px;width:800px;margin-left:25%;margin-top:10%'></div>");
}

//Author : M V
//Purpose : To call custom popup -- Yet to release
//Parameters : id
//id= dynamic id for the custom popup
//Date of creation : 13-Feb-2018
function callPopup(id) {
    $("#" + id).modal("show");
}

//Author : M V
//Purpose : To make a submit form as review request - Yet To Relese
//Parameters : tabId
//tabId= Id of the tab
//Date of creation : 13-Feb-2018
function reviewRequestLoad(tabId) {
    $('form').find('input').each(function () {
        if ($(this).attr("id") != undefined
            && $(this).closest('.form-elements').attr("style") != "visibility: hidden;"
            && $(this).attr("type") != 'hidden'
            && $(this).attr("style") != 'visibility: hidden;'
            && $(this).closest('.drop-zone').length != 0) {
            if ($(this).attr("type") == "button") {
                var curentId = $(this).attr("id");
                $("#" + curentId).closest('.drop-zone').hide();
            }
            else {
                var curentId = $(this).attr("id");
                $("#" + curentId).closest('.drop-zone').show();
                $("#" + curentId).prop('disabled', true);
            }

        }
    });
    $('form').find('select').each(function () {
        if ($(this).attr("id") != undefined
            && $(this).closest('.form-elements').attr("style") != "visibility: hidden;"
            && $(this).attr("type") != 'hidden'
            && $(this).attr("style") != 'visibility: hidden;'
            && $(this).closest('.drop-zone').length != 0) {
            var curentId = $(this).attr("id");
            $("#" + curentId).closest('.drop-zone').show();
            $("#" + curentId).prop('disabled', true);
        }
    }); $('form').find('label').each(function () {
        if ($(this).attr("id") != undefined
            && $(this).closest('.form-elements').attr("style") != "visibility: hidden;"
            && $(this).attr("type") != 'hidden'
            && $(this).attr("style") != 'visibility: hidden;'
            && $(this).closest('.drop-zone').length != 0) {
            var curentId = $(this).attr("id");
            $("#" + curentId).closest('.drop-zone').show();
            $("#" + curentId).prop('disabled', true);
        }
    });
    $('form').find('a').each(function () {
        if ($(this).attr("href") != "#") {
            if ($(this).attr("id") != undefined
                && $(this).closest('.form-elements').attr("style") != "visibility: hidden;"
                && $(this).attr("type") != 'hidden'
                && $(this).attr("style") != 'visibility: hidden;'
                && $(this).closest('.drop-zone').length != 0) {
                var curentId = $(this).attr("id");
                $("#" + curentId).closest('.drop-zone').hide();
            }
        }
    });
    $('form').find('textarea').each(function () {
        if ($(this).attr("href") != "#") {
            if ($(this).attr("id") != undefined
                && $(this).closest('.form-elements').attr("style") != "visibility: hidden;"
                && $(this).attr("type") != 'hidden'
                && $(this).attr("style") != 'visibility: hidden;'
                && $(this).closest('.drop-zone').length != 0) {
                var curentId = $(this).attr("id");
                $("#" + curentId).closest('.drop-zone').show();
                $("#" + curentId).prop('disabled', true);
            }
        }
    });
    $('#' + tabId).closest('.drop-zone').hide();

}

//Author : M V
//Purpose : To bring accordian in a grid - Yet To Relese
//Date of creation : 13-Feb-2018
function acordianCheck() {
    /*var rowIndex = 1;
     $('#StausGrid_1grid tbody tr').each(function (i, v) {
         var index = (i + rowIndex) * -1;
         $('#StausGrid_1grid tbody tr').eq(index).after("<tr class='fadeTr'><td colspan='7'>SR Details are yet to upadate </td></tr>");
         rowIndex = rowIndex + 1;
     });
     $('.fadeTr').hide();
     $('.odd').click(function () {
         alert($(this).closest("tr").next().html());
         if (!$(this).closest("tr").next().hasClass('show')) {            
             $(this).closest("tr").next().closest("tr").addClass('show');
             $('.show').css("width","100%");
             $(this).closest("tr").next().closest("tr").slideDown();
         }
         else {
             alert('has class');
             $(this).closest("tr").next().closest("tr").removeClass('show');
             $(this).closest("tr").next().closest("tr").slideUp();
         }
 
     });
     $('.even').click(function () {
 
         if (!$(this).closest("tr").next().hasClass('show')) {
             alert('no has class');
             $(this).closest("tr").next().toggleClass('show');
             $(this).closest("tr").next().slideToggle();
         }
         else {
             alert('has class');
             $(this).closest("tr").next().removeClass('show');
             $(this).closest("tr").next().slideUp();
         }
 
     });
 
     $('.pagination').click(function () {
         acordianCheck();
     });   */
}


//Author : M V
//Purpose : To get all the controls from the form - Yet To Relese
//Date of creation : 13-Feb-2018
function GetControlIds() {
    var temp = '';
    $('form').find('input').each(function () {
        if ($(this).attr("data-controlid") != undefined && $(this).closest('.drop-zone').attr("style") != "display: none;") {
            if ($(this).attr("type") != "button" && $(this).attr("type") != "radio" && $(this).attr("type") != "checkbox") {
                temp += $(this).attr("data-controlid") + ",";
            }
            else if (($(this).attr("type") == "radio" || $(this).attr("type") == "checkbox") && $(this).closest('.drop-zone').attr("style") != "display: none;") {
                temp += $(this).closest("div").parent().attr("id") + ",";
            }
        }

    });

    $('form').find('select').each(function () {
        if ($(this).attr("data-controlid") != undefined && $(this).closest('.drop-zone').attr("style") != "display: none;") {
            temp += $(this).attr("data-controlid") + ",";
        }
    });

    $('form').find('textarea').each(function () {
        if ($(this).attr("id") != undefined && $(this).closest('.drop-zone').attr("style") != "display: none;") {
            temp += $(this).attr("id") + "_textaria" + ",";
        }
    });

    if ($(".effect-zoe").length > 0) {
        temp += $(".effect-zoe").closest("div").attr("data-controlid") + ",";;
    }
    var controlidList = temp.split(',');
    var joinvariable = $.unique(controlidList).join(",");

    return joinvariable.substring(0, joinvariable.length - 1);
}

//Author : KM
//Purpose : To get the logged in user Name
//Parameters : searchbtnId, criteriaId
// searchbtnId = controlId of search button ,criteriaId= controlID of criteria used in search button
//Date of creation : 20-Feb-2018
//modified on:22-Mar-2018
function getLoginUserName(searchbtnId, criteriaId) {



    var loginUserName = $('#divUserPanel').find('#cmsusersfullname').html();
    if (loginUserName != '' && loginUserName != undefined) {
        $("[data-controlid='" + searchbtnId + "']").prop('disabled', true);
        $("[data-controlid='" + criteriaId + "']").prop('disabled', true);
        $("[data-controlid='" + criteriaId + "']").val(loginUserName);
        setTimeout(function () {
            $("[data-controlid='" + searchbtnId + "']").click();
        }, 30);
    }

}



//Author : KM
//Purpose : shows a message on text areas with a maxlength attribute
//Date of creation : 21-Feb-2018
function loadRemainingCharInTextarea() {
    $('textarea[maxlength]').each(function () {
        var maxLength = parseInt($(this).attr('maxlength'));
        if (!isNaN(maxLength)) {
            $(this).parent().append("<div class='charsRemaining'></div>");
            $(this).parent().find('.charsRemaining').html('You have ' + (maxLength - $(this).val().length) + ' characters remaining');
        }
    });

    $('textarea[maxlength]').on("keyup change, paste", function () {
        var maxLength = parseInt($(this).attr('maxlength'));
        if (!isNaN(maxLength)) {
            $(this).parent().find('.charsRemaining').html('You have ' + (maxLength - $(this).val().length) + ' characters remaining');
        }
    });
}

//Author: AV
//Purpose: To show controls when another or existing user search function is performed
//parameters: Search data-controlid in Requested For form, RequestedControl, Tab Value(Should be AnotherPerson for exsisting user as well), Fields to be displayed when search is performed
//Date of Creation: 02/21/2018

function existing(searchBtn, RequestedControl, controlsCommaSeperated, hidecontrolList) {
    debugger;
    if ($("[data-controlid='" + RequestedControl + "']").val() == "") {
        hideControls(controlsCommaSeperated);
    }

    $("[data-controlid='" + searchBtn + "']").click(function () {
        setTimeout(function () {

            if ($("[data-controlid='" + RequestedControl + "']").val() != "") {
                var controlList = controlsCommaSeperated.split(',');
                for (i = 0; i < controlList.length; i++) {
                    var tempControl = controlList[i];
                    $('[data-controlid="' + tempControl + '"]').closest('.drop-zone').show();
                }
            }

        }, 2000);
        $(document).on('click', '#sourceResultTable tbody tr', function () {
            var controlList = controlsCommaSeperated.split(',');
            for (i = 0; i < controlList.length; i++) {
                var tempControl = controlList[i];
                $('[data-controlid="' + tempControl + '"]').closest('.drop-zone').show();
            }
        });
    });

    hideControls(hidecontrolList);
}

//Author: AV
//Purpose: To show alert box when the required field is not filled
//parameters:controlsCommaSeperated,buttonId
//controlsCommaSeperated:data-control id's comma seperated for validating,buttonid: data-control id of the button to redirect to next form
//Date of Creation: 02/21/2018

function customRequiredFieldAlert(controlsCommaSeperated, buttonId) {

    var controlList = controlsCommaSeperated.split(',');
    var errorMessage = "<b>Required Field is missing</b> <ul>";
    var isValid = true
    for (i = 0; i < controlList.length; i++) {
        var tempControl = controlList[i];
        if ($('[data-controlid="' + tempControl + '"]').val() == "") {
            errorMessage += "<li>" + tempControl + " is required </li>";
            isValid = false;
        }
    }
    errorMessage += "</ul>"
    if (isValid) {
        $('[data-controlid="' + buttonId + '"]').click();
    } else {
        bootbox.alert({
            size: "medium",
            title: "Validation Error",
            message: errorMessage,
        }).find('.modal-content').css({

            'color': '#2e2e2e'
        }).find('.modal-footer').css({
            'text-align': 'center'
        })

    }

}


//Author : M V
//Purpose : To replicate same as behavior in requested for
//Parameters : normalControlList,disableControlList,dependentControlList
//normalControlList : controls to display in sameas,disableControlList: Controls to disable in sameas,dependentControlList : Controls which are depending on other controls
//Date of creation : 22-Feb-2018
function sameAs(normalControlList, searchbuttonList, mappingControls, hidecontrolList) {

    // To Reset controls
    resetControls(normalControlList);

    //To Show controls
    showControls(normalControlList);

    //To disable controls
    disableControlList(disableControlList);

    //map the controls
    mappingControls(mappingControls, true);

    //To hide controls
    hideControls(locationInfo);
}

//Author : M V
//Purpose : To replicate newuser as behavior in requested for
//Parameters : normalControlList,disableControlList,dependentControlList
//normalControlList : controls to display in sameas,disableControlList: Controls to disable in sameas,dependentControlList : Controls which are depending on other controls
//Date of creation : 22-Feb-2018
function newuser(normalControlList, hidecontrolList, locationInfo) {

    // To Reset controls
    resetControls(normalControlList);

    //To Show controls
    showControls(normalControlList);

    //To hide controls
    hideControls(hidecontrolList);

    //To edit new user
    $('[data-controlid="' + locationInfo + '"]').find('.locediticon').click();
}

//Author : M V
//Purpose : To replicate newuser as behavior in requested for
//Parameters : normalControlList,disableControlList,dependentControlList
//normalControlList : controls to display in sameas,disableControlList: Controls to disable in sameas,dependentControlList : Controls which are depending on other controls
//Date of creation : 22-Feb-2018
function multipleuser(normalControlList, hidecontrolList) {

    // To Reset controls
    resetControls(normalControlList);

    //To Show controls
    showControls(normalControlList);

    //To hide controls
    hideControls(hidecontrolList);

}

//Author : M V
//Purpose : To validate grid
//Parameters : minimumRows, gridControlID
//minimumRows : number of rows should exist,gridControlID: data controlid for grid
//Date of creation : 22-Feb-2018
function gridValidation(minimumRows, gridControlID) {
    return $('[data-controlid="' + gridControlID + '"] tr').length >= minimumRows;
}

//Author : M V
//Purpose : To get all the controls from the form - Yet To Relese
//Date of creation : 13-Feb-2018
function GetControlDescriptions(controlsCommaSeperated) {
    var temp = '';

    var controlList = controlsCommaSeperated.split(',');
    for (i = 0; i < controlList.length; i++) {
        var tempControl = controlList[i];

        if (tempControl.indexOf("_Container") >= 0) {
            $('#' + tempControl).find("input").each(function (i, v) {
                temp += i + ": " + v + "\n";
            });
        } else {
            if ($('[data-controlid="' + tempControl + '"]').val() != "") {
                temp += tempControl + ": " + $('[data-controlid="' + tempControl + '"]').val() + "\n";
            }

        }
    }

    return temp;
}

//Author : M V
//Purpose : To bind controls below checkbox
//Parameters : checkBoxContainerID, checkBoxLabel, commaSelparatedControlList
//checkBoxContainerID: Check box list name, checkBoxLabel: check box label to bind controls, commaSelparatedControlList: List the controls in comma separeted List
//Date of creation : 27-Feb-2018
function LoadControltoCheckBox(checkBoxContainerID, checkBoxLabel, commaSelparatedControlList) {
    $("#" + checkBoxContainerID).find("input").each(function () {
        if ($(this).closest("label").text() == checkBoxLabel) {
            controlList = commaSelparatedControlList.split(",");
            for (i = 0; i < controlList.length; i++) {
                $('[data-controlid="' + controlList[i] + '"]').closest(".form-elements").insertAfter($("#" + $(this).attr("id")).closest("div"));
                $('[data-controlid="' + controlList[i] + '"]').closest(".form-elements").hide();
            }

            $("#" + $(this).attr("id")).click(function () {
                controlList = commaSelparatedControlList.split(",");
                for (i = 0; i < controlList.length; i++) {
                    if ($(this).prop("checked")) {
                        $('[data-controlid="' + controlList[i] + '"]').closest(".form-elements").show();
                    }
                    else {
                        $('[data-controlid="' + controlList[i] + '"]').val('');
                        $('[data-controlid="' + controlList[i] + '"]').closest(".form-elements").hide();
                    }
                }
            });
        }
    });

}

//Author : M V
//Purpose : To bind controls below checkbox
//Parameters : checkBoxContainerID, checkBoxLabel, commaSelparatedControlList
//checkBoxContainerID: Check box list name, checkBoxLabel: check box label to bind controls, commaSelparatedControlList: List the controls in comma separeted List
//Date of creation : 27-Feb-2018
function bindCheckBoxClick(checkBoxContainerID, checkBoxLabel, commaSelparatedControlList) {
    if ($("#Ship_To_88_txt").val() == "") {
        $("#Ship_To_88_txt").closest(".drop-zone").hide();
    }
    $("#" + checkBoxContainerID).find("input").each(function () {
        if ($(this).closest("label").text() == checkBoxLabel) {
            $("#" + $(this).attr("id")).click(function () {
                controlList = commaSelparatedControlList.split(",");
                for (i = 0; i < controlList.length; i++) {
                    if ($(this).prop("checked")) {
                        if (controlList[i] == "RemoteWorkerShipTo") {
                            $("#Ship_To_88_txt").closest(".drop-zone").show();
                        }
                        else {
                            $('[data-controlid="' + controlList[i] + '"]').closest(".drop-zone").show();
                        }
                    }
                    else {
                        if (controlList[i] == "RemoteWorkerShipTo") {
                            $("#Ship_To_88_txt").closest(".drop-zone").hide();
                        }
                        else {
                            $('[data-controlid="' + controlList[i] + '"]').val('');
                            $('[data-controlid="' + controlList[i] + '"]').closest(".drop-zone").hide();
                        }
                    }
                }
            });
        }
    });
}



//Author : M V
//Purpose : To validate all controls
//Date of creation : 27-Feb-2018
function ValidateForm() {
    $('#aspnetForm').valid();
}


//Author : M V
//Purpose : To load  controls in tab
//Parameters : formSequenceNo, tabTextBox, sortedButtonListCommaSeperated
//formSequenceNo= current form sequence no, tabTextBox = Text Box which maintain the form stage, sortedButtonListCommaSeperated=List the anchor ID in ascending order
//Date of creation : 13-Feb-2018
function enableDisableTab(formSequenceNo, tabTextBox, controlsCommaSeperated) {
    // To Load current form no in text box
    var existingFormNo = $("[data-controlid='" + tabTextBox + "']").val();
    var currentFormNo = 0;
    if (existingFormNo > formSequenceNo) {
        currentFormNo = existingFormNo;
    }
    else {
        currentFormNo = formSequenceNo;
        $("[data-controlid='" + tabTextBox + "']").val(formSequenceNo);
    }


    // Enable and Disable button
    var buttonList = controlsCommaSeperated.split(",");
    for (i = 1; i < buttonList.length + 1; i++) {
        if (i <= currentFormNo) {
            $('#' + buttonList[i - 1]).removeClass("cust-tab-t5-disabled");
        }
        else {
            $('#' + buttonList[i - 1]).addClass("cust-tab-t5-disabled");
        }
    }

}

function CTSOnbordingCheckBoxCheck() {

    if (!$("#6Systemor_N_4checkbox_grp").prop("checked")) {
        hideControls("EmailMobileDeviceLabel,EmailTenmplateDownLoad,EmailonMobileDeviceAttachment");
    }
    else {
        showControls("EmailMobileDeviceLabel,EmailTenmplateDownLoad,EmailonMobileDeviceAttachment");
    }

    if ($('[data-controlid="Role"] :selected').text() != "Select") {
        $('[data-controlid="Defintion"]').closest(".drop-zone").show();
    }
    else {
        $('[data-controlid="Defintion"]').closest(".drop-zone").hide();
    }

}

//Author: AV
//Purpose: To show alert box when the required field is not filled
//parameters:controlsCommaSeperated,buttonId
//controlsCommaSeperated:data-control id's comma seperated for validating,buttonid: data-control id of the button to redirect to next form
//Date of Creation: 02/21/2018

function customAlert(controlsCommaSeperated) {

    var controlList = controlsCommaSeperated.split(',');
    var errorMessage = "<b>Required Field is missing</b> <ul>";
    var isValid = true
    for (i = 0; i < controlList.length; i++) {
        var tempControl = controlList[i];
        if ($('[data-controlid="' + tempControl + '"]').val() == "") {
            errorMessage += "<li>" + tempControl + " is required </li>";
            isValid = false;
        }
    }
    errorMessage += "</ul>"

    bootbox.alert({
        size: "medium",
        title: "Validation Error",
        message: errorMessage,
    }).find('.modal-content').css({

        'color': '#2e2e2e'
    }).find('.modal-footer').css({
        'text-align': 'center'
    })



}


//Author : M V
//Purpose : To get all the control Describtion - Yet To Relese
//Date of creation : 13-Feb-2018
function GetNEBHSARFDescriptios(formData, inputControlId, outputControlId) {
    var temp = ''
    if (formData == "RequestFor") {
        temp = "System Access Request for " + $('[data-controlid="RequestedFullName"]').val() +
                "\\nBuilding: " + $('#div1_RequestedF_1locationinfo #lblbld').text() +
                "\\nDepartment: " + $('#div1_RequestedF_1locationinfo #lbldept').text() +
                "\\nFloor: " + $('#div1_RequestedF_1locationinfo #lblFlr').text() +
                "\\nOffice: " + $('#div1_RequestedF_1locationinfo #lblFlr').text() +
                "\\nEmail: " + $('[data-controlid="RequestedEmail"]').val() +
                "\\nPhone: " + $('[data-controlid="RequestedPhone"]').val() +
                "\\nExt: " +
                "\\nPosition/Title: " + $('[data-controlid="JobTitle"]').val() +
                "\\nEmployment Status: " + $('[data-controlid="EmploymentStatus"]').val() +
                "\\nPersonnel Type: " + $('[data-controlid="PersonnelType"]').val() +
                "\\nProvider Only: " + $('[data-controlid="ProviderOnly"]').val() +
                "\\nPersonnel Other: " + $('[data-controlid="PersonnelOther"]').val() +
                "\\nEmployee #: " + $('[data-controlid="EmployeeNumber"]').val() +
                "\\nBadge #: " + $('[data-controlid="BadgeNumber"]').val();
        $("[data-controlid='" + outputControlId + "']").val(temp);
    }
    else if (formData == "Approver") {
        temp = "\n\nAuthorizing Manager: " + $('[data-controlid="ApproverFullName"]').val() +
        "(" + $('[data-controlid="ApproverLoginID"]').val() + ")" +
        "\n\nEmail: " + $('[data-controlid="ApproverEmail"]').val();

        $('[data-controlid="' + outputControlId + '"]').val(($('[data-controlid="' + inputControlId + '"]').val() + temp));
    }

}

function quicketTicketForm(quickTicketID, quickTexbox, searchButtonId, descriptionTextBoxID, ticketDropDown, headerLabelID) {



    $("[data-controlid='" + quickTexbox + "']").val(quickTicketID);

    $("[data-controlid='" + searchButtonId + "']").click();

    $("[data-controlid='" + descriptionTextBoxID + "']").prop('disabled', true);

    $("[data-controlid='" + ticketDropDown + "']").prop('disabled', true);

    var temp = $("[data-controlid='" + descriptionTextBoxID + "']").val();

    $("[data-controlid='" + headerLabelID + "']").prepend("<h1 class='content-main-heading text-center'>" + temp + "</h1>");
}

//Specific for CTS ONBOARDING
function CTSONBOARDINGRequestForLoad() {
    $('#edit_DisplayRequestedFo_15_locationinfo').click(function () {
        $('#DisplayRequestedFo_15_locationinfo #selBld_DisplayRequestedFo_15_locationinfo').change(function () {
            if ($('#DisplayRequestedFo_15_locationinfo #selBld_DisplayRequestedFo_15_locationinfo :selected').text() != "Choose...") {
                $('[data-controlid="RequestedBuilding"]').val($('#DisplayRequestedFo_15_locationinfo #selBld_DisplayRequestedFo_15_locationinfo :selected').text());
            }
        })

        $('#DisplayRequestedFo_15_locationinfo #selFlr_DisplayRequestedFo_15_locationinfo').change(function () {
            if ($('#DisplayRequestedFo_15_locationinfo  #selFlr_DisplayRequestedFo_15_locationinfo :selected').text() != "Choose...") {
                $('[data-controlid="RequestedFloor"]').val($('#DisplayRequestedFo_15_locationinfo  #selFlr_DisplayRequestedFo_15_locationinfo :selected').text());
            }
        })

        $('#DisplayRequestedFo_15_locationinfo #selDpt_DisplayRequestedFo_15_locationinfo').change(function () {
            if ($('#DisplayRequestedFo_15_locationinfo #selDpt_DisplayRequestedFo_15_locationinfo :selected').text() != "Choose...") {
                $('[data-controlid="RequestedDepartment"]').val($('#DisplayRequestedFo_15_locationinfo #selDpt_DisplayRequestedFo_15_locationinfo :selected').text());
            }
        })

        $('#DisplayRequestedFo_15_locationinfo [name="txtOff"]').keypress(function () {
            $('[data-controlid="RequestedOffice"]').val($('#DisplayRequestedFo_15_locationinfo #txtOff').val());
        })

        $('#DisplayRequestedFo_15_locationinfo #selSut').change(function () {
            if ($('#DisplayRequestedFo_15_locationinfo #selSut :selected').text() != "Choose...") {
                $('[data-controlid="RequestedSuite"]').val($('#DisplayRequestedFo_15_locationinfo #selSut :selected').text());
            }
        })

    });
}
//Author : K M
//Specific for CVNT-SARF
function loadCheckBoxes() {
    var inputJsonData = [
    {
        "controlId": "SelectedNe_1checkbox_grp",
        "mapList": [
                {
                    "label": "SharePoint Role",
                    "level": 0,
                    "controls": [
                      	"User_Level_1dropdown_grp"
                    ]
                },
				{
				    "label": "Distribution Lists",
				    "level": 0,
				    "controls": [
                      	"ADGroupsGr_1grid"
				    ]
				}
        ]
    },
	{
	    "controlId": "SelectedCl_2checkbox_grp",
	    "mapList": [
                {
                    "label": "ABAQIS",
                    "level": 0,
                    "controls": [
                      	"AccessLeve_1dropdown_grp"
                    ]
                },
				{
				    "label": "DocuSign",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_227_grp"
				    ]
				},
				{
				    "label": "Incident Tracking System (ITS)",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_3dropdown_grp"
				    ]
				},
				{
				    "label": "Netimpac",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_4dropdown_grp"
				    ]
				},
				{
				    "label": "Omniview",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_5dropdown_grp"
				    ]
				},
				{
				    "label": "PCC",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_6dropdown_grp"
				    ]
				},
				{
				    "label": "Remedy Episode Connect",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_7dropdown_grp"
				    ]
				},
				{
				    "label": "TigerText",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_8dropdown_grp"
				    ]
				}
	    ]
	},
	{
	    "controlId": "SelectedFi_3checkbox_grp",
	    "mapList": [
                {
                    "label": "ADP Enterprise",
                    "level": 0,
                    "controls": [
                      	"AccessLeve_9dropdown_grp"
                    ]
                },
				{
				    "label": "Capital Expense Request (CER)",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_10dropdown_grp"
				    ]
				},
				{
				    "label": "Doc-link",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_11dropdown_grp"
				    ]
				},
				{
				    "label": "Epicor Exchange (EpEx)",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_12dropdown_grp"
				    ]
				},
				{
				    "label": "FRx",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_13dropdown_grp"
				    ]
				},
				{
				    "label": "iSave",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_14dropdown_grp"
				    ]
				},
				{
				    "label": "RFMS",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_15dropdown_grp"
				    ]
				},
				{
				    "label": "SHP",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_16dropdown_grp"
				    ]
				},
				{
				    "label": "Smartlinx",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_17dropdown_grp"
				    ]
				},
				{
				    "label": "Zirmed",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_18dropdown_grp"
				    ]
				}
	    ]
	},
	{
	    "controlId": "SelectedHo_4checkbox_grp",
	    "mapList": [
                {
                    "label": "ClearCare",
                    "level": 0,
                    "controls": [
                      	"AccessLeve_19dropdown_grp"
                    ]
                },
				{
				    "label": "HomeCare Homebase",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_20dropdown_grp"
				    ]
				}
	    ]
	},
	{
	    "controlId": "SelectedHu_5checkbox_grp",
	    "mapList": [
                {
                    "label": "CaseBuilder",
                    "level": 0,
                    "controls": [
                      	"AccessLeve_21dropdown_grp"
                    ]
                },
				{
				    "label": "Electronic Personnel Action Notice (ePAN)",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_22dropdown_grp"
				    ]
				},
				{
				    "label": "Employment Verification Tracking Sys (EVTS)",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_23dropdown_grp"
				    ]
				},
				{
				    "label": "EPStaff",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_24dropdown_grp"
				    ]
				},
				{
				    "label": "iCims",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_25dropdown_grp"
				    ]
				},
				{
				    "label": "Payroll Reports (PRR)",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_26dropdown_grp"
				    ]
				},
				{
				    "label": "ReportSmith",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_27dropdown_grp"
				    ]
				}
	    ]
	},
	{
	    "controlId": "SelectedOp_7checkbox_grp",
	    "mapList": [
                {
                    "label": "Educational Campus (EC)",
                    "level": 0,
                    "controls": [
                      	"AccessLeve_28dropdown_grp"
                    ]
                },
				{
				    "label": "Security Access Request Form (SARF)",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_29dropdown_grp"
				    ]
				},
				{
				    "label": "SKPI",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_30dropdown_grp"
				    ]
				},
				{
				    "label": "TELS",
				    "level": 0,
				    "controls": [
                      	"AccessLeve_31dropdown_grp"
				    ]
				}
	    ]
	},
	{
	    "controlId": "SelectedSa_8checkbox_grp",
	    "mapList": [
                {
                    "label": "AllScripts",
                    "level": 0,
                    "controls": [
                      	"AllScripts_1dropdown_grp"
                    ]
                }
	    ]
	}
    ];
    showTree(inputJsonData);
}



function LocationInfoMapping(LocationInfoControlId, BuildingControlId, DepartmentControlId, FloorControlId, OfficeControlId, SuiteControlID) {

    $('[data-controlid="' + LocationInfoControlId + '"] .locediticon').click(function () {
        if ($("#DisplayRequestedFo_15_locationinfo #selBld_DisplayRequestedFo_15_locationinfo :selected").text() == "Choose...") {
            $("#selBld_DisplayRequestedFo_15_locationinfo option").filter(function (index) { return $(this).text() === "TROY ISD" }).attr('selected', 'selected')
            $('#selBld_DisplayRequestedFo_15_locationinfo').trigger('change')
            $("#selDpt_DisplayRequestedFo_15_locationinfo option").filter(function (index) { return $(this).text() === "OTHER" }).attr('selected', 'selected')
            $('#selDpt_DisplayRequestedFo_15_locationinfo').trigger('change')
            $("#selFlr_DisplayRequestedFo_15_locationinfo option").filter(function (index) { return $(this).text() === "1" }).attr('selected', 'selected')
            $('#selFlr_DisplayRequestedFo_15_locationinfo ').trigger('change')
        }

        $('[data-controlid="' + LocationInfoControlId + '"] #save').click(function () {

            LocationInfoMapping(LocationInfoControlId, BuildingControlId, DepartmentControlId, FloorControlId, OfficeControlId, SuiteControlID);

            $("[data-controlid='" + LocationInfoControlId + "'] .user-info-div2 tr").each(function (i, v) {

                if ($(this).find("td:first-child").text() == "Building") {
                    if ($(this).find("td:eq(1)").find("select :selected").text() != "Choose...") {
                        $('[data-controlid="' + BuildingControlId + '"]').val($(this).find("td:eq(1)").find("select :selected").text());
                    }
                }

                else if ($(this).find("td:first-child").text() == "Department") {
                    if ($(this).find("td:eq(1)").find("select :selected").text() != "Choose...") {
                        $('[data-controlid="' + DepartmentControlId + '"]').val($(this).find("td:eq(1)").find("select :selected").text());
                    }
                }

                else if ($(this).find("td:first-child").text() == "Floor") {
                    if ($(this).find("td:eq(1)").find("select :selected").text() != "Choose...") {
                        $('[data-controlid="' + FloorControlId + '"]').val($(this).find("td:eq(1)").find("select :selected").text());
                    }
                }

                else if ($(this).find("td:first-child").text() == "Office") {
                    $('[data-controlid="' + OfficeControlId + '"]').val($(this).find("td:eq(1)").find("input").val());
                }

                else if ($(this).find("td:first-child").text() == "Suite") {
                    if ($(this).find("td:eq(1)").find("select :selected").text() != "Choose...") {
                        $('[data-controlid="' + SuiteControlID + '"]').val($(this).find("td:eq(1)").find("select :selected").text());
                    }
                }
            });
        });

        $('[data-controlid="' + LocationInfoControlId + '"] #cancel').click(function () {

            if ($('#DisplayRequestedFo_15_locationinfo #lblbld.locationinfolabel').text() == "") {
                $('#DisplayRequestedFo_15_locationinfo #lblFlr.locationinfolabel').text(1);
                $('#DisplayRequestedFo_15_locationinfo #lbldept.locationinfolabel').text('OTHER');
                $('#DisplayRequestedFo_15_locationinfo #lblbld.locationinfolabel').text('TROY ISD');
            }

            LocationInfoMapping(LocationInfoControlId, BuildingControlId, DepartmentControlId, FloorControlId, OfficeControlId, SuiteControlID);
        });
    });
}

function LocationInfoMappingGeneric(LocationInfoControlId, BuildingControlId, DepartmentControlId, FloorControlId, OfficeControlId, SuiteControlID) {

    $('[data-controlid="' + LocationInfoControlId + '"] .locediticon').click(function () {

        $('[data-controlid="' + LocationInfoControlId + '"] #save').click(function () {

            LocationInfoMapping(LocationInfoControlId, BuildingControlId, DepartmentControlId, FloorControlId, OfficeControlId, SuiteControlID);

            $("[data-controlid='" + LocationInfoControlId + "'] .user-info-div2 tr").each(function (i, v) {

                if ($(this).find("td:first-child").text() == "Building") {
                    if ($(this).find("td:eq(1)").find("select :selected").text() != "Choose...") {
                        $('[data-controlid="' + BuildingControlId + '"]').val($(this).find("td:eq(1)").find("select :selected").text());
                    }
                }

                else if ($(this).find("td:first-child").text() == "Department") {
                    if ($(this).find("td:eq(1)").find("select :selected").text() != "Choose...") {
                        $('[data-controlid="' + DepartmentControlId + '"]').val($(this).find("td:eq(1)").find("select :selected").text());
                    }
                }

                else if ($(this).find("td:first-child").text() == "Floor") {
                    if ($(this).find("td:eq(1)").find("select :selected").text() != "Choose...") {
                        $('[data-controlid="' + FloorControlId + '"]').val($(this).find("td:eq(1)").find("select :selected").text());
                    }
                }

                else if ($(this).find("td:first-child").text() == "Office") {
                    $('[data-controlid="' + OfficeControlId + '"]').val($(this).find("td:eq(1)").find("input").val());
                }

                else if ($(this).find("td:first-child").text() == "Suite") {
                    if ($(this).find("td:eq(1)").find("select :selected").text() != "Choose...") {
                        $('[data-controlid="' + SuiteControlID + '"]').val($(this).find("td:eq(1)").find("select :selected").text());
                    }
                }
            });
        });

        $('[data-controlid="' + LocationInfoControlId + '"] #cancel').click(function () {

            LocationInfoMapping(LocationInfoControlId, BuildingControlId, DepartmentControlId, FloorControlId, OfficeControlId, SuiteControlID);
        });
    });
}




//Author: AV
//Purpose: To show alert box when the required field is not filled - Specific for CTS
//parameters:controlsCommaSeperated,buttonId
//controlsCommaSeperated:data-control id's comma seperated for validating,buttonid: data-control id of the button to redirect to next form
//Date of Creation: 03/21/2018

function CTScustomRequiredFieldAlert(controlsCommaSeperated, buttonId, isHiddenCheck) {

    var controlList = controlsCommaSeperated.split(',');
    var errorMessage = "<b>Required Field is missing</b> <ul>";
    var isValid = true
    for (i = 0; i < controlList.length; i++) {
        var tempControl = controlList[i];
        if (isHiddenCheck) {
            if ($('[data-controlid="' + tempControl + '"]').val() == "") {
                var labelString = $('[data-controlid="' + tempControl + '"]').closest(".drop-zone").find('.control-label ').text().replace(":*", "");
                errorMessage += "<li>" + labelString + " is required </li>";
                isValid = false;
            }
        } else {
			if ($('[data-controlid="' + tempControl + '"]').closest('.drop-zone').attr("style") != undefined) {
                if ($('[data-controlid="' + tempControl + '"]').val() == "" && $('[data-controlid="' + tempControl + '"]').closest('.drop-zone').attr("style").indexOf("display: none;") == -1) {
                    var labelString = $('[data-controlid="' + tempControl + '"]').closest(".drop-zone").find('.control-label ').text().replace(":*", "");
                    errorMessage += "<li>" + labelString + " is required </li>";
                    isValid = false;
                }

            }
            else {
                if ($('[data-controlid="' + tempControl + '"]').val() == "") {
                    var labelString = $('[data-controlid="' + tempControl + '"]').closest(".drop-zone").find('.control-label ').text().replace(":*", "");
                    errorMessage += "<li>" + labelString + " is required </li>";
                    isValid = false;
                }
            }
        }

    }
    errorMessage += "</ul>"
    if (isValid) {
        //$('[data-controlid="' + buttonId + '"]').click();
    } else {
        bootbox.alert({
            size: "medium",
            title: "Validation Error",
            message: errorMessage,
        }).find('.modal-content').css({

            'color': '#2e2e2e'
        }).find('.modal-footer').css({
            'text-align': 'center'
        })

    }
}



function CTSOnboradingRequestDetails() {
    // JavaScript source code

    var inputJsonData = [
        {
            "controlId": "TimeKeepin_2checkbox_grp",
            "mapList": [
                    {
                        "label": "Basic time card entry in PeopleSoft",
                        "level": 0,
                        "controls": [
                            "Project_ID_37_txt",
                        ]
                    },
            ]
        },
         {
             "controlId": "Communicat_5checkbox_grp",
             "mapList": [
                     {
                         "label": "Pidgin Messenger",
                         "level": 0,
                         "controls": [
                             "Add_Group_3dropdown_grp",
                         ]
                     },
             ]
         },
        {
            "controlId": "HardwareSo_6checkbox_grp",
            "mapList": [
                    {
                        "label": "Remote worker (Ship Equipment)",
                        "level": 0,
                        "controls": [
                             "Ship_To_88_txt",
                        ]
                    },
                  {
                      "label": "Network Printer",
                      "level": 0,
                      "controls": [
                            "IP_Address_or_Printer_Name_and_Location_97_txt"
                      ]
                  },
                  {
                      "label": "Laptop Computer",
                      "level": 0,
                      "controls": [
                            "Labtop_3checkbox_grp"
                      ]
                  },
            ]
        },
        {
            "controlId": "Systemor_N_4checkbox_grp",
            "mapList": [
                    {
                        "label": "Email (CareTech.com)",
                        "level": 0,
                        "controls": [
                             "Does_user_have_a_client_side_email_54_dropdown_grp", "EmailAddre_2_txt"
                        ]
                    }, { "label": "Email on Mobile Device (MDM)", "level": 0, "controls": ["Email_on_Mobile_Device_Attachment_53_Fileup", "CareTech_S_2_label", "DownLoad_1fileDownload"] }
            ]
        }
    ];
    showTree(inputJsonData);
    $('[for="TimeKeepin_2checkbox_grp"]').css({ "word-break": "break-word", "border-bottom": "2px solid rgb(31, 179, 232)", "font-size": "15px", "padding-top": "25px", "width": "18%" });
    $('[for="Communicat_5checkbox_grp"]').css({ "word-break": "break-word", "border-bottom": "2px solid rgb(31, 179, 232)", "font-size": "15px", "padding-top": "25px", "width": "14%" });
    $('[for="HardwareSo_6checkbox_grp"]').css({ "word-break": "break-word", "border-bottom": "2px solid rgb(31, 179, 232)", "font-size": "15px", "padding-top": "25px", "width": "18%" });
    $('[for="Systemor_N_4checkbox_grp"]').css({ "word-break": "break-word", "border-bottom": "2px solid rgb(31, 179, 232)", "font-size": "15px", "padding-top": "25px", "width": "22%" });
    $('#Labtop_3checkbox_grp_Container').closest('.drop-zone').find('.control-label').hide();
}

//Author: AV
//Purpose: To show alert box when the required field is not filled - Specific for CTS
//parameters:controlsCommaSeperated,buttonId
//controlsCommaSeperated:data-control id's comma seperated for validating,buttonid: data-control id of the button to redirect to next form
//Date of Creation: 03/21/2018

function MLK1customRequiredFieldAlert(controlsCommaSeperated, buttonId, isHiddenCheck) {

    var controlList = controlsCommaSeperated.split(',');
    var errorMessage = "<b>Required Field is missing</b> <ul>";
    var isValid = true
    for (i = 0; i < controlList.length; i++) {
        var tempControl = controlList[i];
        if (isHiddenCheck) {
            if ($('[data-controlid="' + tempControl + '"]').val() == "") {
                var labelString = $('[data-controlid="' + tempControl + '"]').closest(".drop-zone").find('.control-label ').text().replace(":", "");
                errorMessage += "<li>" + labelString + " is required </li>";
                isValid = false;
            }
        } else {
            if ($('[data-controlid="' + tempControl + '"]').val() == "" && $('[data-controlid="' + tempControl + '"]').closest('.drop-zone').attr("style").indexOf("display: none;") == -1) {
                var labelString = $('[data-controlid="' + tempControl + '"]').closest(".drop-zone").find('.control-label ').text().replace(":", "");
                errorMessage += "<li>" + labelString + " is required </li>";
                isValid = false;
            }
        }

    }
    errorMessage += "</ul>"
    if (isValid) {
        //$('[data-controlid="' + buttonId + '"]').click();
    } else {
        bootbox.alert({
            size: "medium",
            title: "Validation Error",
            message: errorMessage,
        }).find('.modal-content').css({

            'color': '#2e2e2e'
        }).find('.modal-footer').css({
            'text-align': 'center'
        })

    }
}

function scrollup(buttonControlId) {
    $('[data-controlid="' + buttonControlId + '"]').css({
        "display": "none"
    , "position": "fixed"
    , "bottom": "50px"
    , "right": "300px"
    , "z-index": "99"
    , "font-size": "18px"
    , "border": "none"
    , "outline": "none"
    , "color": "white"
    , "cursor": "pointer"
    , "padding": "13px"
    , "border-radius": "20px"
    });

    $('[data-controlid="' + buttonControlId + '"]').text('');
    $('[data-controlid="' + buttonControlId + '"]').addClass("fa fa-angle-double-up");

    $(".right-contentarea").scroll(function () {
        if ($(".right-contentarea").scrollTop() > 20) {

            $('[data-controlid="' + buttonControlId + '"]').css("display", "block");

        } else {
            $('[data-controlid="' + buttonControlId + '"]').css("display", "none");
        }
    });


    // When the user clicks on the button, scroll to the top of the document
    $('[data-controlid="' + buttonControlId + '"]').click(function topFunction() {
        $(".right-contentarea").scrollTop(0);

    });
}

function HCGHTreeRequestDetails() {
    // JavaScript source code

    var inputJsonData = [
        {
            "controlId": "Applicatio_17checkbox_grp",
            "mapList": [
                    {
                        "label": "JHED ID",
                        "level": 0,
                        "controls": [
                            "SSN_1_txt"
                        ]
                    },
                    {
                        "label": "Meditech",
                        "level": 0,
                        "controls": [
                            "Notes_2_txt"
                        ]
                    },
                    {
                        "label": "Network Share",
                        "level": 0,
                        "controls": [
                            "AccessLeve_1dropdown_grp",
                            "Pleaseindi_1_txt",
                            "Descriptio_2_txt"
                        ]
                    }
            ]
        }
    ];
    showTree(inputJsonData);
}

function HCGHTreeRequestDetailsApproval() {
    // JavaScript source code

    var inputJsonData = [
        {
            "controlId": "Applicatio_17checkbox_grp",
            "mapList": [
                    {
                        "label": "JHED ID",
                        "level": 0,
                        "controls": [
                            "SSN_1_txt"
                        ]
                    },
                    {
                        "label": "Meditech",
                        "level": 0,
                        "controls": [
                            "Notes_2_txt"
                        ]
                    },
                    {
                        "label": "Network Share",
                        "level": 0,
                        "controls": [
                            "AccessLeve_3dropdown_grp",
                            "Pleaseindi_4_txt",
                            "Descriptio_5_txt"
                        ]
                    }
            ]
        }
    ];
    showTree(inputJsonData);
}

function CTSApprovalForm2TreeView() {
    // JavaScript source code
    var inputJsonData = [
        {
            "controlId": "TimeKeepin_1checkbox_grp",
            "mapList": [
                    {
                        "label": "Basic time card entry in PeopleSoft",
                        "level": 0,
                        "controls": [
                            "Project_ID_1_txt",
                        ]
                    },
            ]
        },
         {
             "controlId": "Communicat_1checkbox_grp",
             "mapList": [
                     {
                         "label": "Pidgin Messenger",
                         "level": 0,
                         "controls": [
                             "Add_Group_1dropdown_grp",
                         ]
                     },
             ]
         },
        {
            "controlId": "HardwareSo_3checkbox_grp",
            "mapList": [
                    {
                        "label": "Remote worker (Ship Equipment)",
                        "level": 0,
                        "controls": [
                             "Ship_To_5_txt",
                        ]
                    },
                  {
                      "label": "Network Printer",
                      "level": 0,
                      "controls": [
                            "IPAddress__4_txt"
                      ]
                  },
                  {
                      "label": "Laptop Computer",
                      "level": 0,
                      "controls": [
                            "LaptopCate_3checkbox_grp"
                      ]
                  },
            ]
        },
        {
            "controlId": "Systemor_N_1checkbox_grp",
            "mapList": [
                    {
                        "label": "Email (CareTech.com)",
                        "level": 0,
                        "controls": [
                             "Doesuser_h_2dropdown_grp", "EmailAddre_1_txt"
                        ]
                    }, { "label": "Email on Mobile Device (MDM)", "level": 0, "controls": ["CareTech_S_1_label", "Download_2fileDownload"] },
                  {
                      "label": "Citrix App Access",
                      "level": 0,
                      "controls": [
                            "SelectOpti_9checkbox_grp"
                      ]
                  },
                  {
                      "label": "Server Access",
                      "level": 0,
                      "controls": [
                            "Serverand__8_txt"
                      ]
                  },
                  {
                      "label": "Local Admin",
                      "level": 0,
                      "controls": [
                            "CTS_Domain_6checkbox_grp"
                      ]
                  },
                  {
                      "label": "DBA Access",
                      "level": 0,
                      "controls": [
                            "Database_5_txt"
                      ]
                  },
                  {
                      "label": "Domain Admin",
                      "level": 0,
                      "controls": [
                            "DomainAdmi_4checkbox_grp"
                      ]
                  },
                  {
                      "label": "Splunk",
                      "level": 0,
                      "controls": [
                            "DropdownOp_2dropdown_grp",
                            "ADgroup_to_3dropdown_grp"
                      ]
                  },
                  {
                      "label": "Umbrella",
                      "level": 0,
                      "controls": [
                            "AccessLeve_1dropdown_grp"
                      ]
                  },
                   {
                       "label": "iDoc",
                       "level": 0,
                       "controls": [
                             "iDoc_1grid"
                       ]
                   },
                   {
                       "label": "Sharepoint",
                       "level": 0,
                       "controls": [
                             "Sharepoint_2grid"
                       ]
                   },
                  {
                      "label": "Share Drive",
                      "level": 0,
                      "controls": [
                            "ShareDrive_1_txt"
                      ]
                  },
                   { "label": "Windows ID", "level": 0, "controls": ["Windows_ID_1checkbox_grp"] },
            ]
        },
         { "controlId": "Windows_ID_1checkbox_grp", "mapList": [{ "label": "Security Groups", "level": 0, "controls": ["AD_Groups_2_txt", ] }, { "label": "Distribution Lists", "level": 0, "controls": ["ADDistribu_1_txt", ] }, ] }, { "controlId": "ClientSideEmail", "mapList": [{ "label": "Email Address", "level": 0, "controls": ["Email", ] }, ] }];
    showTree(inputJsonData); $('#ProcessID_2_txt').val(getParameterByName("pid")); $('#SubProcess_3_txt').val(getParameterByName("sId")); $('#wfdsk_1_txt').val($("#hdnListsk").val());

}


function populateMenu(str, myOptions) {
    $('[data-controlid="' + str + '"]').empty();
    $('[data-controlid="' + str + '"]').append(
            $('<option></option>').val('').html('Select')
        );
    $.each(myOptions, function (val, text) {
        $('[data-controlid="' + str + '"]').append(
            $('<option></option>').val(val).html(text)
        );
    });
}

function CTSOnbaordingGetApprover() {
    $('[data-controlid="ManagerSearch"]').click();
    setTimeout(function () {
        var mangerinfo = $('[data-controlid="ManagerIfo"]').val();
        var manger = mangerinfo.substring(mangerinfo.indexOf('=') + 1, mangerinfo.indexOf(','));
        $('[data-controlid="ApproverGetName"]').val(manger);
    }, 30);
    //$('[data-controlid="Search_164"]').click();
}

//Author : K M
//Purpose : TreeView for SMH
//Date of creation : 04-April-2018
function SMHTreeRequestDetails() {
    // JavaScript source code

    var inputJsonData = [
        {
            "controlId": "Applicatio_6checkbox_grp",
            "mapList": [
                    {
                        "label": "AIM Vault - Respository for scanned paper records",
                        "level": 0,
                        "controls": [
                            "Users_emai_1_txt"
                        ]
                    },
                    {
                        "label": "Other",
                        "level": 0,
                        "controls": [
                            "Pleasedesc_3_txt"
                        ]
                    },
                    {
                        "label": "Meeting Planner - Room, Equipment Reservations",
                        "level": 0,
                        "controls": [
                            "Nameof_PC__2_txt"
                        ]
                    }
            ]
        }
    ];
    showTree(inputJsonData);
}

//Author : K M
//Purpose : TreeView for SMH
//Date of creation : 04-April-2018
function SMHTreeRequestDetailsApprover() {
    // JavaScript source code

    var inputJsonData = [
        {
            "controlId": "Applicatio_6checkbox_grp",
            "mapList": [
                    {
                        "label": "AIM Vault - Respository for scanned paper records",
                        "level": 0,
                        "controls": [
                            "Users_emai_3_txt"
                        ]
                    },
                    {
                        "label": "Other",
                        "level": 0,
                        "controls": [
                            "Pleasedesc_5_txt"
                        ]
                    },
                    {
                        "label": "Meeting Planner - Room, Equipment Reservations",
                        "level": 0,
                        "controls": [
                            "Nameof_PC__4_txt"
                        ]
                    }
            ]
        }
    ];
    showTree(inputJsonData);
}

function gridDateFormat() {
    setTimeout(function () {
        $("#StausGrid_1grid tbody tr").each(function () {
            if ($(this).find(":nth(0)").text().indexOf('/') < 0) {

                var temp = new Date($(this).find(":nth(0)").text());

                $(this).find(":nth(0)").text('');

                var tempHours = temp.getHours() - 12;


                var USDate = (temp.getMonth() < 10 ? ('0' + temp.getMonth()) : temp.getMonth()) + '/' +
                             (temp.getDate() < 10 ? ('0' + temp.getDate()) : temp.getDate()) + '/' +
                             temp.getFullYear() + ' ' +
                             (temp.getHours() > 12 ? (tempHours > 10 ? tempHours : ('0' + tempHours)) : (temp.getHours() > 10 ? temp.getHours() : ('0' + temp.getHours()))) + ':' +
                             (temp.getMinutes() < 10 ? ('0' + temp.getMinutes()) : temp.getMinutes()) +
                             (temp.getHours() > 12 ? 'PM' : 'AM');

                $(this).find(":nth(0)").text(USDate);
            }
        });
    }, 30);

    $('[aria-controls="StausGrid_1grid"]').click(function () {
        $("#StausGrid_1grid tbody tr").each(function () {
            if ($(this).find(":nth(0)").text().indexOf('/') < 0) {

                var temp = new Date($(this).find(":nth(0)").text());

                $(this).find(":nth(0)").text('');

                var tempHours = temp.getHours() - 12;


                var USDate = (temp.getMonth() < 10 ? ('0' + temp.getMonth()) : temp.getMonth()) + '/' +
                             (temp.getDate() < 10 ? ('0' + temp.getDate()) : temp.getDate()) + '/' +
                             temp.getFullYear() + ' ' +
                             (temp.getHours() > 12 ? (tempHours > 10 ? tempHours : ('0' + tempHours)) : (temp.getHours() > 10 ? temp.getHours() : ('0' + temp.getHours()))) + ':' +
                             (temp.getMinutes() < 10 ? ('0' + temp.getMinutes()) : temp.getMinutes()) +
                             (temp.getHours() > 12 ? 'PM' : 'AM');

                $(this).find(":nth(0)").text(USDate);
            }
        });
    });

}

//Author : Arul S
//Purpose : Show form submission and Approval status
//Date of creation : 13-April-2018

var fullData = "";
function ShowFormApprovalStatus(DisplayLabelcontrolID, LinkLabelControlId) {
    try {
        // debugger;
        fullData = "";
        if ($('#' + DisplayLabelcontrolID).is(":visible")) {
            //$('#' + DisplayLabelcontrolID).hide();
            $('#' + DisplayLabelcontrolID).css("display", "none");
            //$('#'+LinkLabelControlId).html("<a>Click here to see the approval history</a>");
            return;
        }
        else {
            //$('#' + DisplayLabelcontrolID).show();
            $('#' + DisplayLabelcontrolID).css("display", "block");
            //$('#'+ ShowStatus_1_label).html("<a>Click here to hide the approval history</a>");
        }
        $('#' + DisplayLabelcontrolID).empty();
        $('#' + DisplayLabelcontrolID).html("");

        var Code = 'FORMAPPROVALSTATUS'
        var ProcessId = getParameterByName("pid");
        var ProcessSubmissionId = getParameterByName("sId");
        var ListSk = $("#hdnListsk").val();
        var Parameters = JSON.parse('{\"reposk\":\"' + ProcessId + '\",\"objsk\":\"' + ProcessSubmissionId + '\",\"wfdsk\":\"' + ListSk + '\"}');
        invokeWebApi(Code, null, DisplayLabelcontrolID, Parameters, OnSuccess, error, '', null)


    } catch (e) {
        console.log("Error : " + e.description);
    }
}

function OnSuccess(data, textStatus, xhr) {
    var ajaxObject = $(this)[0];
    var DisplayLabelcontrolID = ajaxObject.element;

    ParseFormApprovalJSON(data, DisplayLabelcontrolID);
    var ApprovalStatusHtml = "";
    ApprovalStatusHtmlHeader = '<div class="row legend-tkt-status-wrapper">'
    ApprovalStatusHtmlHeader += '<div class="col-xs-12 text-right">'
    ApprovalStatusHtmlHeader += '<div class="legend-tkt-status"><img src="../images/icons/icon-tkt-submitted_Approval.png" alt="Submitted" title="Submitted" class="icon-tkt-legend" /> Submitted</div>'
    ApprovalStatusHtmlHeader += '<div class="legend-tkt-status"><img src="../images/icons/icon-tkt-pending.png" alt="Waiting" title="Waiting" class="icon-tkt-legend" /> Waiting</div>'
    ApprovalStatusHtmlHeader += '<div class="legend-tkt-status"><img src="../images/icons/icon-tkt-completed.png" alt="Approved" title="Approved" class="icon-tkt-legend" /> Approved</div>'
    ApprovalStatusHtmlHeader += '<div class="legend-tkt-status"><img src="../images/icons/icon-tkt-cancel.png" alt="Rejected" title="Rejected" class="icon-tkt-legend" /> Rejected</div>'
    ApprovalStatusHtmlHeader += '<div class="legend-tkt-status"><img src="../images/icons/icon-tkt-new.png" alt="Not started" title="Not started" class="icon-tkt-legend" /> Not started</div>'
    ApprovalStatusHtmlHeader += '</div>'
    var ApprovalStatusHtmlFooter = "";
    //ApprovalStatusHtmlFooter = '</div></div></div></div>'

    var ApprovalStatusHtml = "";

    ApprovalStatusHtml = ApprovalStatusHtmlHeader + fullData + ApprovalStatusHtmlFooter;

    $('#' + DisplayLabelcontrolID).html(ApprovalStatusHtml);
    // Select the main list and add the class "hasSubmenu" in each LI that contains an UL
    $('.multi-level-tree ul').each(function () {
        $this = $(this);
        $this.find("li").has("ul").addClass("hasSubmenu");
    });
    // Find the last li in each level
    $('.multi-level-tree li:last-child').each(function () {
        $this = $(this);
        // Check if LI has children
        if ($this.children('ul').length === 0) {
            // Add border-left in every UL where the last LI has not children
            $this.closest('ul').css("border-left", "1px solid gray");
        } else {
            // Add border in child LI, except in the last one
            $this.closest('ul').children("li").not(":last").css("border-left", "1px solid gray");
            // Add the class "addBorderBefore" to create the pseudo-element :defore in the last li
            $this.closest('ul').children("li").last().children("a").addClass("addBorderBefore");
            // Add margin in the first level of the list
            $this.closest('ul').css("margin-top", "20px");
            // Add margin in other levels of the list
            $this.closest('ul').find("li").children("ul").css("margin-top", "20px");
        };
    });
    // Add bold in li and levels above
    $('.multi-level-tree ul li').each(function () {
        $this = $(this);
        $this.mouseenter(function () {
            //    $( this ).children("a").css({"font-weight":"bold","color":"#336b9b"});
        });
        $this.mouseleave(function () {
            //    $( this ).children("a").css({"font-weight":"normal","color":"#428bca"});
        });
    });
    // Add button to expand and condense - Using FontAwesome
    $('.multi-level-tree ul li.hasSubmenu').each(function () {
        $this = $(this);
        $this.prepend("<a href='#'><i class='fa fa-minus-circle'></i><i style='display:none;' class='fa fa-plus-circle'></i></a>");
        $this.children("a").not(":last").removeClass().addClass("toogle");
    });
    // Actions to expand and consense
    $('.multi-level-tree ul li.hasSubmenu a.toogle').click(function () {
        $this = $(this);
        $this.closest("li").children("ul").toggle("slow");
        $this.children("i").toggle();
        return false;
    });
}



function ParseFormApprovalJSON(data, controlId) {
    var dateCreated = '';
    fullData += '<ul class="multi-level-tree">';
    if (data != undefined) {
        $.each(data, function (index, singleData) {
            dateCreated = '';
            // fullData += '<li>';
            if (singleData['ChildNodes'] != undefined && singleData['ChildNodes'].length > 0) {
                //fullData += '<ul>';
                fullData += '<li><a href="#"><span class="' + getClassNameforApproval(singleData['Status']) + '"></span>   ' + singleData['ActivityLabel'] + ' </a>'
                fullData += '<ul>';
                fullData += '<li><a href="#"> Date Created : ' + (singleData['DateCreated'] != null ? singleData['DateCreated'] : "") + ' </a></li>'
                dateCreated = singleData['DateCreated'];
                if (singleData['Status'] == 'Submitted') {
                    fullData += '<li><a href="#"> Submitted By : ' + (singleData['SubmittedBy'] != null ? singleData['SubmittedBy'] : "") + ' </a></li>'
                    fullData += '<li><a href="#"> Status : ' + (singleData['Status'] != null ? singleData['Status'] : "") + ' </li>'
                    //fullData += '<li class="list-group-item"> Submitted Date - ' + singleData['DateExecuted'] + ' </li>'
                }
                else if (singleData['Status'] == 'WAITING') {
                    fullData += '<li><a href="#"> Approved By : ' + (singleData['SubmittedBy'] != null ? singleData['SubmittedBy'] : "") + ' </a></li>'
                    fullData += '<li><a href="#"> Status : ' + singleData['Status'] + ' for ' + WaitingPeriod(dateCreated) + ' day(s)  </a></li>'
                    fullData += '<li><a href="#"> Approved Date : ' + (singleData['DateExecuted'] != null ? singleData['DateExecuted'] : "") + ' </a></li>'
                }
                else {
                    fullData += '<li><a href="#"> Approved By : ' + (singleData['SubmittedBy'] != null ? singleData['SubmittedBy'] : "") + ' </a></li>'
                    fullData += '<li><a href="#"> Status : ' + (singleData['Status'] != null ? singleData['Status'] : "") + ' </a></li>'
                    fullData += '<li><a href="#"> Approved Date : ' + (singleData['DateExecuted'] != null ? singleData['DateExecuted'] : "") + ' </a></li>'
                }
                fullData += '</ul>'
                //fullData += '<div class="tkt-status-content-wrapper">'
                //fullData += '<div class="tkt-status-content">'
                ParseFormApprovalJSON(singleData['ChildNodes'], controlId);


            } else {
                fullData += '<li><a href="#"><span class="' + getClassNameforApproval(singleData['Status']) + '"></span>   ' + singleData['ActivityLabel'] + ' </a>';
                fullData += '<ul>';
                fullData += '<li><a href="#"> Date Created : ' + (singleData['DateCreated'] != null ? singleData['DateCreated'] : "") + ' </a></li>'
                dateCreated = singleData['DateCreated'];
                if (singleData['Status'] == 'Submitted') {
                    fullData += '<li><a href="#"> Submitted By : ' + (singleData['SubmittedBy'] != null ? singleData['SubmittedBy'] : "") + ' </a></li>'
                    fullData += '<li><a href="#"> Status : ' + (singleData['Status'] != null ? singleData['Status'] : "") + ' </li>'
                    //fullData += '<li class="list-group-item"> Submitted Date - ' + singleData['DateExecuted'] + ' </li>'
                }
                else if (singleData['Status'] == 'WAITING') {
                    fullData += '<li><a href="#"> Approved By : ' + (singleData['SubmittedBy'] != null ? singleData['SubmittedBy'] : "") + ' </a></li>'
                    fullData += '<li><a href="#"> Status : ' + singleData['Status'] + ' for ' + WaitingPeriod(dateCreated) + ' day(s)  </a></li>'
                    fullData += '<li><a href="#"> Approved Date : ' + (singleData['DateExecuted'] != null ? singleData['DateExecuted'] : "") + ' </a></li>'
                }
                else {
                    fullData += '<li><a href="#"> Approved By : ' + (singleData['SubmittedBy'] != null ? singleData['SubmittedBy'] : "") + ' </a></li>'
                    fullData += '<li><a href="#"> Status : ' + (singleData['Status'] != null ? singleData['Status'] : "") + ' </a></li>'
                    fullData += '<li><a href="#"> Approved Date : ' + (singleData['DateExecuted'] != null ? singleData['DateExecuted'] : "") + ' </a></li>'
                }
                fullData += "</ul>";

            }
            fullData += "</li>";

        });

        fullData += "</ul>";

    }
}



function error(n) {
    console.log('Error = ' + n.statusText);
}

function WaitingPeriod(CreatedDate) {
    try {
        var From_date = new Date(CreatedDate);
        var To_date = new Date();
        var diff_date = To_date - From_date;

        // var years = Math.floor(diff_date / 31536000000);
        // var months = Math.floor((diff_date % 31536000000) / 2628000000);
        var days = Math.floor(((diff_date % 31536000000) % 2628000000) / 86400000);

        return days;
    } catch (e) {
        console.log("Error : " + e.description);
    }
}

function getClassNameforApproval(status) {
    var className = '';
    switch (status) {
        case "Submitted":
            className = 'status-circle status-circle-orange';
            break;
        case "WAITING":
            className = 'status-circle status-circle-yellow';
            break;
        case "APPROVED":
            className = 'status-circle status-circle-green';
            break;
        case "REJECTED":
            className = 'status-circle status-circle-red';
            break;

        default:
            className = 'status-circle status-circle-';
    }
    return className;
}


//Created by: Muthuvel D
//Purpose: Remedy redirect
function RemedyRedirect() {
    $("[data-controlid='TicketNumber']").val(getParameterByName("id"));
    $("[data-controlid='Search']").click();

    setTimeout(function () {
        var processSk = $("[data-controlid='ProcessSk']").val();
        var processSubmissionSk = $("[data-controlid='ProcessSubmissionSK']").val();
        var formID = $("[data-controlid='FormID']").val();
        var urlkey = $("[data-controlid='urlkey']").val();
        var server = window.location.toString();
        var serverHostName = server.substring(0, server.indexOf("/SSP"));

        var urlString = serverHostName + "/SSP/Admin/FormBuilder/FormEngine/SSPFormEngine.aspx?pid=" + processSk + "&fid=" + formID + "&urlkey=" + urlkey + "&sid=" + processSubmissionSk;

        window.location = urlString;
    }, 300);

}
//CREATE BY AV
//To append the value of share drive to a text box, CTS Onboarding Form
function ctsOnboardingShareDrive() {
    var temp = "";
    if ($('#ADAccounts_1grid tbody tr').text() != "No data available in table") {
        $('#ADAccounts_1grid tbody tr td:first-child').each(function (i, v) {
            temp += $(this).text() + ",";
            $('#AddAD_Dist_1_txt').val(temp.substring(0, temp.length - 1));
        });
    }
}

//CTS ROLE MATRIX 
//Created BY : K M
//
//Method to check the availability of role in role matrix data and
//To update current role information in the Role Matrix namespace
//To be called on change event of Role dropdown
function onRoleChange(role) {
    // var Code = 'FORMAPPROVALSTATUS'
    // var ProcessId = getParameterByName("pid");
    // var ProcessSubmissionId = getParameterByName("sId");
    // var ListSk = $("#hdnListsk").val();
    // var Parameters = JSON.parse('{\"reposk\":\"' + ProcessId + '\",\"objsk\":\"' + ProcessSubmissionId + '\",\"wfdsk\":\"' + ListSk + '\"}');
    // invokeWebApi(Code, null, DisplayLabelcontrolID, Parameters, OnSuccess, error, '', null)
    if (role != null && role != undefined && role != '') {
        var Code = 'CTSSP_ROLEMATRIX'

        var inputParams = {};
        inputParams.UniqueIndentifier = role;
        inputParams.custom = "true";
        invokeWebApi(Code, null, null, inputParams, getRoleControlsArray, null, "", null);
    }
}
var roleMatrixData = [];
var previousChangeData = [];
//Success function
var getRoleControlsArray = function (data, textStatus, jqXHR) {
    if (data != null) {
        if (textStatus == "success") {
            var textValue = $('[data-controlid="Role"] :selected').text();
            if (data.length > 0) {
                $('[data-controlid="Defintion"]').html('<i class="fa fa-check"></i>&nbsp;' + textValue + ' Applied');
            }
            else
                $('[data-controlid="Defintion"]').html('<i class="fa fa-info-circle"></i>&nbsp; No Definition Found for ' + textValue);
            loadFormWithRoleMatrixData(data);
            roleMatrixData = data;
            previousChangeData = data;
        }
        else {
            console.log("loadConfigOptions::" + data.Error);
        }
    }
    else {

    }
}
//Created BY : K M
//Method to load form controls with Role Matrix data
function loadFormWithRoleMatrixData(inputData) {
    resetPrevDataRoleMatrix(previousChangeData);
    //Iterate list of controls
    $.each(inputData, function (ind, value) {

        //Check the control Id/ Element column name is available in the current form / pop up
        if ($('[data-controlid="' + value.Control_ID + '"]').length > 0) {
            //Get element through data-elementcolumnname
            var element = $('[data-controlid="' + value.Control_ID + '"]').closest('.drop-zone');
            //Check element type to assign value based on role
            //For control type - Checkbox or radio button
            if (value.Control_Type == 'Checkbox' || value.Control_Type == 'Radio') {
                var changeToSplitValue = value.Change_To__c.split("~");
                $.each(changeToSplitValue, function (index, text) {
                    var questionValue = text.split(" - ");
                    $.each($(element).find('input'), function (index, item) {
                        if ($(item).val() == questionValue[0] || $(item).closest('label').text() == questionValue[1] || $(item).closest('label').text() == questionValue[0]) {
                            $(item).trigger("click");
                            $(item).prop('checked', true);
                        }

                    });
                });
            }
                //Form control type - Date
            else if (value.Control_Type == "Date") {
                var _formattedDate;
                var dateValue = (value.Change_To__c).toString();
                if ($(element).find("input").attr('dateOnly') == "true")
                    _formattedDate = moment(new Date(dateValue.substring(0, 17))).format("MM/DD/YYYY");
                else
                    _formattedDate = moment(new Date(dateValue.substring(0, 17))).format("MM/DD/YYYY HH:mm");

                $(element).find("input").datetimepicker("setDate", _formattedDate);
            }
                //Form control type - Dropdown or global dropdown
            else if (value.Control_Type == 'List' || value.Control_Type == "v_dropdown") {
                $(element).find('select').val(value.Change_To__c);
            }
                //Form control type - text/email/phone number/ssn/zip/custom/global text control
            else if (value.Control_Type == 'Text') {
                if ($(element).closest('div').find('textarea').length > 0) {
                    $(element).closest('div').find('textarea').val(value.Change_To__c);
                }
                else
                    $(element).find('input').val(value.Change_To__c);
            }

            else if (value.Control_Type == "Email" || value.Control_Type == "Phone" || value.Control_Type == "SSN" || value.Control_Type == "Zip Code" || value.Control_Type == "custom" || value.Control_Type == "v_text-field") {
                $(element).find('input').val(value.Change_To__c);
            }
                //Form control type - number control
            else if (value.Control_Type == "Number") {
                $(element).find("input").val(parseFloat(value.Change_To__c).toFixed(2));
            }
            else
                console.log('Role Matrix implementation not available for control type:' + value.Control_Type + '. From RoleMatrix.js');
        }
    });
}

//Reseting Previous selected data in role matrix
function resetPrevDataRoleMatrix(inputData) {
    //hiding previous selected data
    $.each(inputData, function (ind, value) {
        var element = $('[data-controlid="' + value.Control_ID + '"]').closest('.drop-zone');
        //Check element type to assign value based on role
        //For control type - Checkbox or radio button
        if (value.Control_Type == 'Checkbox' || value.Control_Type == 'Radio') {
            var PreviousChangeToSplitValue = value.Change_To__c.split("~");
            $.each(PreviousChangeToSplitValue, function (index, text) {
                var questionValue = text.split(" - ");
                $.each($(element).find('input'), function (index, item) {
                    if ($(item).val() == questionValue[0] || $(item).closest('label').text() == questionValue[1] || $(item).closest('label').text() == questionValue[0]) {
                        if ($(item).is(':checked')) {
                            $(item).trigger("click");
                        }
                    }

                });
            });
        }
            //Form control type - Dropdown or global dropdown
        else if (value.Control_Type == 'List' || value.Control_Type == "v_dropdown") {
            $(element).find('select').val("");
        }
            //Form control type - text/email/phone number/ssn/zip/custom/global text control
        else if (value.Control_Type == 'Text') {
            if ($(element).closest('div').find('textarea').length > 0) {
                $(element).closest('div').find('textarea').val("");
            }
            else
                $(element).find('input').val("");
        }

        else if (value.Control_Type == "Email" || value.Control_Type == "Phone" || value.Control_Type == "SSN" || value.Control_Type == "Zip Code" || value.Control_Type == "custom" || value.Control_Type == "v_text-field") {
            $(element).find('input').val("");
        }
            //Form control type - number control
        else if (value.Control_Type == "Number") {
            $(element).find("input").val("");
        }
        else if (value.Control_Type == "Date") {
            $(element).find("input").val("");
        }
    })
}

//Method to do Validation
function customRequiredValidationError(controlsCommaSeperated) {
    debugger;
    var controlList = controlsCommaSeperated.split(',');
    var errorMessage = "<b>Required Field is missing</b> <ul>";
    var isValid = true
    for (i = 0; i < controlList.length; i++) {
        var tempControl = controlList[i];
        if ($('[data-controlid="' + tempControl + '"]').val() == "") {
            var labelString = $('[data-controlid="' + tempControl + '"]').closest(".drop-zone").find('.control-label ').text().replace(":*", "").replace(": *", "");
            errorMessage += "<li>" + labelString + " is required </li>";
            isValid = false;
        }
    }
    errorMessage += "</ul>"
    if (!isValid) {
        bootbox.alert({
            size: "medium",
            title: "Validation Error",
            message: errorMessage,
        }).find('.modal-content').css({

            'color': '#2e2e2e'
        }).find('.modal-footer').css({
            'text-align': 'center'
        })
    }
}



//Created By : KM
//Creted on 21April2018
//Get Role from Parent/Base Form to load role matrix in pop up 
//To be called on pop up on load(form load event of pop up)
function loadPopUpWithRoleMatrix() {
    //Get current role information from parent form
    //var role = parent.window.RoleMatrix.currentRoleInfo;
    //Get role matrix data from parent/base form
    //var roleMatrixData = parent.window.RoleMatrix.roleMatrixData;
    var roleMatrixData = parent.window.roleMatrixData;
    //Check role and role matrix data available
    if (roleMatrixData != null && roleMatrixData.length > 0) {
        //Load pop up form with role matrix data
        loadFormWithRoleMatrixData(roleMatrixData);
    }
}
/*Implementation of Role Matrix ends here*/

//CREATED BY AV
//To limit the file upload size to 1

function limitFileUpload() {
    //verify file input is available 
    if ($(".input-file-upload").length) {

        //max file limit , file control prefix
        var _maxFileLimit, _fileControlPrefix;


        //set file limit
        _maxFileLimit = 1;

        //set file prefix
        _fileControlPrefix = "file-input-";

        //iterate file input controls only
        $.each($(".input-file-upload"), function (index, fileInputControl) {

            if (fileInputControl != undefined || fileInputControl != null) {

                //private variables
                var _fileInputControl, _controlId;

                //find element id
                _controlId = $(fileInputControl).attr('id');

                if (_controlId != null) {
                    try {

                        //Initialize dropzone 
                        _fileInputControl = Dropzone.forElement('#'.concat(_fileControlPrefix, _controlId));
                        if (_fileInputControl != undefined && _fileInputControl.options != undefined && _fileInputControl.options.maxFiles != undefined) {

                            //override the default file limits here
                            _fileInputControl.options.maxFiles = _maxFileLimit;
                        }
                    } catch (ex) {
                        console.log('unable to initialize dropzone');
                    }
                }
            }
        });
    }
}

//ADDED BY AV
//Added on 23April2018
//Copied from CTSSPLibrary.js 

function showFormInPopup(formSk, processSk, processSubmissionDataSk, statusId) {
    //showContentInPopup(popupId, popupTitle, popupWidth, popupHeight, formURL, element, controlMapping)
    var popupId = "dashboard_grid_popup";
    var popupTitle = "Request Status";
    var popupWidth = 1194;
    var popupHeight = 768;
    var element = null;
    var controlMapping = { "selectedForm": { "FormSk": formSk } };
    var formParams = '?fid=' + formSk + '&pid=' + processSk + '&sId=' + processSubmissionDataSk + '&q=s'
    if (statusId == 'PENDING' || statusId == 'RESUBMITPENDING' || statusId == 'WAITING')
        window.location.href = "./FormEngine.aspx" + formParams;
    else {
        var formUrl = "./PopupForm.aspx" + formParams;
        showContentInPopup(popupId, popupTitle, popupWidth, popupHeight, formUrl, element, controlMapping);
    }
}

//Author: K M
//Purpose: To show alert box when the required field is not filled - Specific for SMH
//parameters:controlsCommaSeperated,buttonId
//controlsCommaSeperated:data-control id's comma seperated for validating,buttonid: data-control id of the button to redirect to next form
//Date of Creation: 03/21/2018

function SMHcustomRequiredFieldAlert(controlsCommaSeperated, isHiddenCheck) {

    var controlList = controlsCommaSeperated.split(',');
    var errorMessage = "<b>Required Field is missing</b> <ul>";
    var isValid = true
    for (i = 0; i < controlList.length; i++) {
        var tempControl = controlList[i];
        if (isHiddenCheck) {
            if ($('[data-controlid="' + tempControl + '"]').val() == "") {
                var labelString = $('[data-controlid="' + tempControl + '"]').closest(".drop-zone").find('.control-label ').text().replace(":*", "");
                errorMessage += "<li>" + labelString + " is required </li>";
                isValid = false;
            }
        } else {
            if ($('[data-controlid="' + tempControl + '"]').closest('.drop-zone').attr("style") != undefined) {
                if ($('[data-controlid="' + tempControl + '"]').val() == "" && $('[data-controlid="' + tempControl + '"]').closest('.drop-zone').attr("style").indexOf("display: none;") == -1) {
                    var labelString = $('[data-controlid="' + tempControl + '"]').closest(".drop-zone").find('.control-label ').text().replace(":*", "");
                    errorMessage += "<li>" + labelString + " is required </li>";
                    isValid = false;
                }

            }
            else {
                if ($('[data-controlid="' + tempControl + '"]').val() == "") {
                    var labelString = $('[data-controlid="' + tempControl + '"]').closest(".drop-zone").find('.control-label ').text().replace(":*", "");
                    errorMessage += "<li>" + labelString + " is required </li>";
                    isValid = false;
                }
            }
        }

    }
    errorMessage += "</ul>"
    if (isValid) {
        // $('[data-controlid="' + buttonId + '"]').click();
    } else {
        bootbox.alert({
            size: "medium",
            title: "Validation Error",
            message: errorMessage,
        }).find('.modal-content').css({

            'color': '#2e2e2e'
        }).find('.modal-footer').css({
            'text-align': 'center'
        })

    }
}

function dynamiclistAPICallLoad() {

    var userData = null;

    $.ajax({
        url: "http://localhost:60648/API/DynamicData/Get",
        type: 'GET',
        async: false,
        success: function (data, textStatus, xhr) {
            userData = data;
        }
    }).promise();

    return userData;
}

function dynamiclistAPICall(jsonData, client, dynamicListName, status, dropdownId, valueToremove) {
    $("#" + dropdownId + " option[value='" + valueToremove + "']").remove();

    for (i = 0; i < jsonData.length; i++) {
        if (jsonData[i].Client == client && jsonData[i].DynamicListName == dynamicListName && jsonData[i].Status == status) {
            $("#" + dropdownId).append("<option value=" + jsonData[i].label + ">" + jsonData[i].value + "</option>");
        }
    }
}

//Created : Muthuvel D
//Created On : 5/2/2018
//Purpose : To verify approval submitted data
function verifyApproval(isSubmitted, thanksLabel, titlelabel) {
    if (isSubmitted == "Yes") {
        $(".drop-zone").hide();
        $("[data-controlid='" + thanksLabel + "']").show();
        $("[data-controlid='" + titlelabel + "']").show();
    }
    else {
        $("[data-controlid='" + thanksLabel + "']").hide();
    }

}