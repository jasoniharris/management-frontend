/**
 * Created by jason on 04/07/17.
 */
$(document).ready(function () {
    $("#delete-all").change(function () {
        $("input[value='delete']:checkbox").prop('checked', $(this).prop("checked"));
    });

    $('#delete-submit').click(function () {
        var $inputs = $("td input[name='delete']:checked");
        var count = $inputs.length;

        if (confirm('Are you sure you want to delete ' + count + ' client(s)')) {
            $inputs.each(function () {
                var id = $(this).parent().siblings().first().text();
                console.log("This ID is " + id);
                $.ajax({
                    contentType: 'application/json',
                    method: 'GET',
                    url: '/management/client/delete?_id=' + id,
                    data: JSON.stringify([id]),
                    success: function (data, status) {
                        console.log(data, status);
                        window.location.replace('/management/client/list');
                        $("#search-form").submit();
                    },
                    error: function (req, status, error) {
                        console.log(status + error);
                    }
                });
            });
        }
    });
});