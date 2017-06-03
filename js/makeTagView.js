function makeTagV() {
     $.ajax({
        url:'/tags/all',
        type:'GET',
        processData:false,
        success: function(data){
            if(data['status']=='SUCCESS'){
                data['result'].forEach(function(value, index, arr) {
                    makeTag(value);
                });
                
            }else{
                console.log(data);
            }

        },
        error : function(error){
            console.log(error);
        }

    });
 }


var makeTag=function(data){
    var tagCard=$("<div></div>").addClass("selected-card col-sm-3 col-lg-3 col-md-3");
    var tagInfo1=$("<div></div>");
    var tagInfo2=$("<div></div>").addClass("tag-info");
    var tagDropdown=$("<div></div>").addClass("dropdown-header3");
    var tagHead=$("<div></div>").addClass("tag-head");
    var tagALink=$("<a></a>").attr("href", "#").text(data.name);
    var tagCount=$("<div></div>").addClass("tag-count").text('X  ' + data.count);
    var tagEditDiv=$("<div></div>").addClass("edit-icon2");
    var tagEditA=$("<a></a>").attr("href","#");
    var tagEditI=$("<i></i>").addClass("fa fa-pencil-square o").attr("aria-hidden","true");
    var tagDetail=$("<div></div>").addClass("tag-detail");
    var tagDetailP=$("<p></p>").text(data.description);
    tagDropdown.append(tagHead);
    tagHead.append(tagALink);
    tagDropdown.append(tagCount);
    tagDropdown.append(tagEditDiv);
    tagEditDiv.append(tagEditA);
    tagEditA.append(tagEditI);
    tagDropdown.append(tagDetail);
    tagDetail.append(tagDetailP);

    tagInfo2.append(tagDropdown);
    tagInfo1.append(tagInfo2);
    tagCard.append(tagInfo1);
    $("#tagBox").append(tagCard);
};
