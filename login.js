
        // LOGIN
        function login() {
            let user = document.getElementById("loginUser").value;
            let pass = document.getElementById("loginPass").value;

            if (user === "karan" && pass === "1234") {
                document.getElementById("sidebar").style.display = "block";
                openPage("homePage");
            } else {
                alert("Incorrect username or password!");
            }
        }

        // PAGE SWITCH
        function openPage(pageId) {
            document.querySelectorAll(".page").forEach(pg => pg.classList.remove("active"));
            document.getElementById(pageId).classList.add("active");
        }
    
