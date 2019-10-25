window.onload = function() {
    var flag=0;
    var safeId=0;
    var buttons = document.querySelectorAll("#table .img");

    for (var i=0;i<buttons.length;i++)
    {
        buttons[i].addEventListener("click", click);
    }

    function click()
    {
        if (flag ==0) // Первое нажатие
        {
            safeId=parseInt(this.getAttribute("id"));
            flag++;
            PrintById(safeId);
        }
        else if (flag ==1) //Второе нажатие
        {
            var a=parseInt(this.getAttribute("id"));
            if (CheckId(a)==3)
            {
                return;
            }
           
            PrintById(a);

            var firstClass=0;
            var secondClass=0;

            secondClass=parseInt(this.getAttribute("class")[8]);
            firstClass=parseInt(document.getElementById(safeId).getAttribute("class")[8]);

            if(firstClass==secondClass)
            {
                setTimeout(Win,500, safeId, a);
            }
            else
            {
                setTimeout(Lose,1000,safeId, a);
            }
            flag--;
        }
        else
        {
            alert("Что-то пошло не так");
            return;
        }

        function Win (first, second)
        {
            //document.getElementById(first).style.visibility = "hidden";
            //document.getElementById(second).style.visibility = "hidden";
            document.getElementById(first).style.opacity = 0;
            document.getElementById(second).style.opacity= 0;
            //alert("Success!")
        }
        function Lose (first, second)
        {
            document.getElementById(first).src="images/bg2.png";
            document.getElementById(second).src="images/bg2.png";
            //alert("U missed!");
        }
        function PrintById(id)
        {
            var e = document.getElementById(id);
            if (id==1 || id==6)
            {e.src="images/1.png";}
            else if (id==2 || id==11)
            {e.src="images/2.png";}
            else if (id==3 || id==4)
            {e.src="images/3.png";}
            else if (id==5 || id==16)
            {e.src="images/4.png";}
            else if (id==7 || id==12)
            {e.src="images/6.png";}
            else if (id==8 || id==10)
            {e.src="images/5.png";}
            else if (id==9 || id==14)
            {e.src="images/7.png";}
            else if (id==13 || id== 15)
            {e.src="images/8.png";}
        }
        function CheckId(id)
        {
            if(a==safeId)
            {
                alert("Same");
                document.getElementById(a).src="images/bg2.png";
                flag--;
                a=0;
                return 3;
            }
        }
    }
}