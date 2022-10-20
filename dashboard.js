const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");


//show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})  

//close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'; 
})

//change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span').classList.toggle('active');
    localStorage.setItem("theme", "dark");
    if (document.body.classList.contains('dark-theme-variables')==true){
        document.getElementsByClassName('meses')[0].style.backgroundColor="#edeffd";
        document.getElementsByClassName('meses')[1].style.backgroundColor="#edeffd";
        document.getElementById('datadash1').style.backgroundColor="#edeffd";
    }
    if (document.body.classList.contains('dark-theme-variables')==false){
        body.classList.remove('dark-theme-variables');
        localStorage.setItem("theme", "light");
    }
});

const body = document.querySelector('body');

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add('dark-theme-variables');
        themeToggler.querySelector('span').classList.toggle('active');
        document.getElementsByClassName('meses')[0].style.backgroundColor="#edeffd";
        document.getElementsByClassName('meses')[1].style.backgroundColor="#edeffd";
        document.getElementById('datadash1').style.backgroundColor="#edeffd";
}

    function logar(){
        var login = document.getElementById('login').value;
        var senha = document.getElementById('senha').value;

        if(login == "admin" && senha == "admin"){
            function local(){
                location.href = 'home.html';
            }
            Swal.fire({
                heightAuto: false,
                icon: 'success',
                title: 'Logado com sucesso',
                showConfirmButton: false,
                timer: 1500
              })
              setInterval(local, 1000)
        }
        else{
            Swal.fire({
                toast:false,
                heightAuto: false,
                icon: 'error',
                title: 'Falha no login',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

    function logout () {
    location.href = "index.html";
    }

    function dashboard () {
        location.href = "home.html";
        }

    function settings () {
        location.href = "settings.html";
        }
// manipulação dom //

const dash = document.querySelectorAll ('.dash');


let t1 = document.getElementById('table1');
let t2 = document.getElementById('table2');
let t3 = document.getElementById('table3');
let t4 = document.getElementById('table4');

function tabela_1(){
    t1.style.display ="block";
    t2.style.display ="none";
    t3.style.display ="none";
    t4.style.display ="none";
    document.getElementById("box1").style.boxShadow = 'none';
    document.getElementById("box2").style.boxShadow = '';
    document.getElementById("box3").style.boxShadow = '';
    document.getElementById("box4").style.boxShadow = '';

    if(document.getElementById('chart1').classList.contains('recent-orders')){
        stop();
    }
    else{
    const ctx = document.getElementById('chart1');
    ctx.classList.add('recent-orders');
    ctx.removeAttribute("hidden");
    ctx.style.display = ("block");
    const labels = ['Seg','Ter','Quar','Qui','Sex','Sab','Dom'];
    const data = {
        labels,
        datasets: [{
            data:[5,2.5,6.8,5.2,2.3,8.6,3.5,20],
            borderWidth:6,
            borderColor: 'rgba(77,166,253,0.85)',
            backgroundColor: 'transparent',
            label: "Gráfico de gastos semanais",
        }]
    };

        const config = {
            type: 'line',
            data,
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          };
    
    const myChart = new Chart(ctx, config);
        }
}
function tabela_2(){
        t1.style.display="none";
        t2.style.display="block";
        t3.style.display="none";
        t4.style.display ="none";
        document.getElementById("box2").style.boxShadow = 'none';
        document.getElementById("box1").style.boxShadow = '';
        document.getElementById("box3").style.boxShadow = '';
        document.getElementById("box4").style.boxShadow = '';

        if(document.getElementById('chart2').classList.contains('recent-orders')){
            stop();
        }
        else{
        const ctx = document.getElementById('chart2');
        ctx.classList.add('recent-orders');
        ctx.removeAttribute("hidden");
        ctx.style.display = ("block");
        const labels = ['Semana 1','Semana 2','Semana 3','Semana 4'];
        const data = {
            labels,
            datasets: [{
                data:[150,524,598,412,700],
                borderWidth:1,
                borderColor: 'transparent',
                backgroundColor: 'rgba(77,166,253,0.85)',
                label: "Gastos mensais de Janeiro"
            }]
        };
        
        const config = {
            type: 'bar',
            data,
            options: {
                responsive: true
            }
        };
        
        const myChart = new Chart(ctx, config);
        }
}

function tabela_3(){
        t1.style.display ="none";
        t2.style.display ="none";
        t3.style.display ="block";
        t4.style.display ="none";
        document.getElementById("box3").style.boxShadow = 'none';
        document.getElementById("box1").style.boxShadow = '';
        document.getElementById("box2").style.boxShadow = '';
        document.getElementById("box4").style.boxShadow = '';

        if(document.getElementById('chart3').classList.contains('recent-orders')){
            stop();
        }
        else{
        const ctx = document.getElementById('chart3');
        ctx.classList.add('recent-orders');
        ctx.removeAttribute("hidden");
        ctx.style.display = ("block");
        const labels = ['AWS','Azure','Google Cloud','Oracle'];
        const data = {
            labels,
            datasets: [{
                data:[150,524,598,412],
                borderWidth:1,
                borderColor: 'transparent',
                backgroundColor: ['rgba(250,202,71,1)','rgba(255,71,71,1)','rgba(77,166,253,0.85)','rgba(117,255,71,1)'],
                label: "Gráfico de faturamento"
            }]
        };
        
        const config = {
            type: 'doughnut',
            data,
            options: {
                responsive: true
            }
        };
        
        const myChart = new Chart(ctx, config);
        }
}
function tabela_4(){
        t1.style.display="none";
        t2.style.display="none";
        t3.style.display ="none";
        t4.style.display ="block";
        document.getElementById("box1").style.boxShadow = '';
        document.getElementById("box2").style.boxShadow = '';
        document.getElementById("box3").style.boxShadow = '';
        document.getElementById("box4").style.boxShadow = 'none';
        
        if(document.getElementById('table4').classList.contains('recent-orders')){
            stop();
        }
        else{
        const ctx = document.getElementById('table4');
        ctx.classList.add('recent-orders');
        ctx.removeAttribute("hidden");
        ctx.style.display = ("block");
        const labels = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
        const data = {
            labels,
            datasets: [{
                data:[150,524,598,412,365,1252,1552,1423,654,885,4552,541],
                borderWidth:6,
                borderColor: 'rgba(77,166,253,0.85)',
                backgroundColor: 'transparent',
                label: "Gráfico de faturamento"
            }]
        };
        
        const config = {
            type: 'line',
            data,
            options: {
                responsive: true
            }
        };
        
        const myChart = new Chart(ctx, config);

        }
}