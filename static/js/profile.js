

// html 화면에 사용자 이름을 띄우는 방법. 
// payload_parse는 payloada만 하면 str형태로 가져오는데 이를 object 형태로 가져오기 위함이다.
window.onload = async function () {
    
    const payload = localStorage.getItem("payload")
    const payload_parse = JSON.parse(payload)


    let token = localStorage.getItem("access")

    // function moveDetail(article_id) {
    //     window.location.href = `${frontend_base_url}/doc/detail.html?article_id=${article_id}`;
    // }
    
    

    const my_respose = await fetch(`${backend_base_url}/users/${payload_parse.user_id}/`,{
        headers:{
            "Authorization" : `Bearer ${token}`
        },
        method:"GET",
    })
    

    const my_json_response = await my_respose.json()
    

    let loginButton = document.getElementById("login-button")
    loginButton.style.display = "none"

    const my_posts = await fetch(`${backend_base_url}/users/myposts/`,{
        headers:{
            "Authorization" : `Bearer ${token}`
        },
        method:"GET",
    })

    const my_json_posts = await my_posts.json()
    // const my_title = JSON.parse(my_json_posts.title)

    console.log(my_json_posts)

    const my_likes = await fetch(`${backend_base_url}/users/likes/`,{
        headers:{
            "Authorization" : `Bearer ${token}`
        },
        method:"GET",
    })

    const my_json_likes = await my_likes.json()
    console.log(my_json_likes)
    

    my_json_likes.forEach((obj) => {
        let mylikes = document.getElementById("likeposts")
        let mylikeLi = document.createElement("li")
        mylikeLi.setAttribute("class", 'nav-item')

        let mypostBtn2 = document.createElement("button")
        mypostBtn2.setAttribute("class", "nav-link btn")
        mypostBtn2.setAttribute("onclick", `postDetail(${obj.id})`)
        mypostBtn2.innerText = `${obj.title}`

        mylikeLi.appendChild(mypostBtn2)
        mylikes.appendChild(mylikeLi)
    });

    my_json_posts.forEach((obj) => {
        console.log(obj.title)
        console.log(obj.id)
        let myPosts = document.getElementById("myposts")
        let myPostLi = document.createElement("li")
        myPostLi.setAttribute("class", 'nav-item')

        let mypostBtn = document.createElement("button")
        mypostBtn.setAttribute("class", "nav-link btn")
        mypostBtn.setAttribute("onclick", `postDetail(${obj.id})`)
        mypostBtn.innerText = `${obj.title}`

        myPostLi.appendChild(mypostBtn)
        myPosts.appendChild(myPostLi)
    });

}

