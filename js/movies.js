const month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
commentsdiv=document.querySelector(".comments")
document.querySelector(".close").addEventListener("click",function()
{
    document.querySelector(".mainmoviebox").style.opacity="0"
    document.querySelector(".mainmoviebox").style.transform="translateY(1000px)"
    // document.querySelector(".mainmoviebox").style.display="none"
})
const moviebox=document.querySelector(".moviebox")
movie=""
currentmainmovieindex=0
moviearr=data["movie_data"]
for(i=0;i<moviearr.length;i++)
{
    eachmovie=moviearr[i]
    rating_arr=eachmovie.rating
    var sum=0
    rating_arr.forEach(function(each){
        sum+=each
    })
    avg=sum/rating_arr.length
    datearr=eachmovie.release.split("/")
    monthindex=parseInt(datearr[1])-1
    movie='<div class="eachmovie">'
    movie+='<span class="info"><i class="fa fa-info" aria-hidden="true"></i></span>'
    movie+='<img src="'+eachmovie.cover+'" alt="cover-iamge">'
    movie+='<div class="desc">'
    movie+=' <h3>'+eachmovie.title+'</h3>'
    movie+='<p class="overview">'+eachmovie.overview.substring(0,60)+'...</p>'
    movie+='<div class="ratingrelease">'
    movie+='<p class="rating">'+avg.toFixed(1)+' <i class="fa fa-star" aria-hidden="true"></i></p>'
    movie+='<p class="release">'+datearr[0]+' '+month[monthindex]+' '+datearr[2]+'</p>'
    movie+='</div></div></div>'
    moviebox.innerHTML+=movie
}
moviedivsarr=document.querySelectorAll(".eachmovie")
for(let i = 0; i < moviedivsarr.length; i++) {
    setTimeout(() => {
      moviedivsarr[i].classList.add("animate")
    }, 200*i);
  }
movies=document.querySelectorAll(".eachmovie")
movies.forEach(function(each,i){
    each.addEventListener("click",function(){
        mainmovie(i)
        currentmainmovieindex=i
    })
})
function mainmovie(index)
{
    mainmoviearr=moviearr=data["movie_data"][index]
    document.querySelector(".mimg").src=mainmoviearr.cover
    document.querySelector(".mmoviename").innerText=mainmoviearr.title
    document.querySelector(".moverview").innerText=mainmoviearr.overview
    datearr=eachmovie.release.split("/")
    monthindex=parseInt(datearr[1])-1
    document.querySelector(".mrelease").innerText=datearr[0]+' '+month[monthindex]+' '+datearr[2]
    document.querySelector(".mlang").innerText=mainmoviearr.language
    rating_arr=mainmoviearr.rating
    var sum=0
    rating_arr.forEach(function(each){
        sum+=each
    })
    avg=sum/rating_arr.length
    stars=document.querySelectorAll(".starbox i")
    stars.forEach(function(each)
    {
        each.classList.remove("fa-star")
        each.classList.add("fa-star-o")
    })
    document.querySelector(".mrating").innerText=avg.toFixed(1);
    actorsdiv=document.querySelector(".actorsdiv")
    actorsdiv.innerHTML=""
    genstr=""
    actorarr=mainmoviearr.actors
    actorarr.forEach(function(eachactor){
        genstr='<div class="eachactor">'
        genstr+='<img src="'+eachactor.image+'" alt="actor-img">'
        genstr+='<div class="actordesc">'
        genstr+='<p class="name">'+eachactor.name+'</p>'
        genstr+='<p class="role">'+eachactor.role+'</p>'
        genstr+=' </div> </div>'
        actorsdiv.innerHTML+=genstr
    })
    commentsdiv.innerHTML=""
    commentarr=mainmoviearr.comments
    commentarr.forEach(function(eachcomment)
    {
        genstr='<div class="eachcomment">'
        genstr+='<p class="commentusername"><i class="fa fa-user" aria-hidden="true"></i> '+eachcomment.username+'</p>'
        genstr+='<p class="comment">'+eachcomment.comment+'</p>'
        genstr+='<div class="interactionbutton">'
        genstr+='<i class="fa fa-thumbs-up likedislike" aria-hidden="true"></i>'
        genstr+='<i class="fa fa-thumbs-down likedislike" aria-hidden="true"></i>'
        genstr+='<i class="fa fa-ellipsis-v" aria-hidden="true"></i>'
        genstr+='</div></div>'
        commentsdiv.innerHTML+=genstr
    })
    interationbuttons=document.querySelectorAll(".interactionbutton .likedislike")
    interationbuttons.forEach(function(each){
        each.addEventListener("click",function(event){
        each.classList.toggle("active")
        })
    });
    stars=document.querySelectorAll(".starbox i")
    stars.forEach(function(each,index)
    {
        each.addEventListener("mouseover",function(){
            for(i=0;i<=index;i++)
            {
                stars[i].classList.remove("fa-star-o")
                stars[i].classList.add("fa-star")
            }
            for(i=index+1;i<stars.length;i++)
            {
                stars[i].classList.remove("fa-star")
                stars[i].classList.add("fa-star-o")
            }
        })
    })
    // document.querySelector(".mainmoviebox").style.display="block"
    document.querySelector(".mainmoviebox").style.opacity="1"
    document.querySelector(".mainmoviebox").style.transform="translateY(0px)"
    document.querySelector(".mdesc").scrollTop=0
}
document.querySelector('.submitcomment').addEventListener("click",function(){
    message=document.querySelector('.commentbyuser').value
    document.querySelector('.commentbyuser').value=""
    genstr='<div class="eachcomment">'
    genstr+='<p class="commentusername"><i class="fa fa-user" aria-hidden="true"></i> Admin</p>'
    genstr+='<p class="comment">'+message+'</p>'
    genstr+='<div class="interactionbutton">'
    genstr+='<i class="fa fa-thumbs-up likedislike" aria-hidden="true"></i>'
    genstr+='<i class="fa fa-thumbs-down likedislike" aria-hidden="true"></i>'
    genstr+='<i class="fa fa-ellipsis-v" aria-hidden="true"></i>'
    genstr+='</div></div>'
    commentsdiv.innerHTML=genstr+commentsdiv.innerHTML
    interationbuttons=document.querySelectorAll(".interactionbutton .likedislike")
    interationbuttons.forEach(function(each){
        each.addEventListener("click",function(event){
        each.classList.toggle("active")
        })
    });
})
document.querySelector('.submitrating').addEventListener("click",function(){
    ratingstarcount=document.querySelectorAll(".starbox .fa-star").length
    rating_arr=moviearr=data["movie_data"][currentmainmovieindex].rating
    sum=ratingstarcount
    rating_arr.forEach(function(each){
        sum+=each
    })
    avg=sum/(rating_arr.length+1)
    document.querySelector(".mrating").innerText=avg.toFixed(1);
})