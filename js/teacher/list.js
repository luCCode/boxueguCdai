define(['jquery','common','nprogress','template'], function ($,undefined,nprogress,template) {
    nprogress.done();

    /*渲染讲师列表*/

    $.get('/v6/teacher', function (data) {
        if(data.code==200){
            var html =template('teacher-list-tpl',{list:data.result});
            $('#teacher-list-tbody').html(html)
        }
    });
    //查看讲师详细信息

    $('#teacher-list-tbody').on('click','.teacher-view', function () {
        $.get('/v6/teacher/view',{
            tc_id:$(this).parent().attr('data-id')
        }, function (data) {
            if(data.code==200){
                $('#teacherModal').html(template('teacher-view-tpl',data.result));
            }
        })
    })
});
