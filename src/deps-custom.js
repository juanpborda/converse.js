define("converse-custom", [
    "DataTable",
    "datatables-bootstrap3",
    "toastr",
    "blockUI",
    "toastr",
    "datetimepicker"
], function(DataTable, datatablesBootstrap3, blockUI, toastr, datetimepicker) {
    return {
        'DataTable': DataTable,
        'datatables-bootstrap3': datatablesBootstrap3,
        'blockUI': blockUI,
        'toastr': toastr,
        'datetimepicker': datetimepicker
    };
});
