/*=====Задание 1=====*/
alert("It works!");
for (var i =10; i<=20; i++)
{
    console.log(i);
}
/*Задание для самостоятельного выполнения 1 и 2*/
var resultSum=0;
for (var i=10; i<=20; i++)
{
    console.log(i+"^2="+i*i);
    resultSum+=i;
}
console.log("Summary: "+resultSum);

/*=====Задание 2=====*/
function buttonClick()
{
    var sum=0;
    var mult=1;
    //Проверка на пустой ввод
    if(document.getElementById("x1").value.length==0 || document.getElementById("x2").value.length==0)
    {
        alert("Поля х1 и х2 должны быть заполнены!");
    }
    else
    {
        var x1 = parseInt(document.getElementById('x1').value,10);
        var x2 = parseInt(document.getElementById('x2').value,10);

        //Проверка на корректность введенных значений
        if(Number.isNaN(x1) || Number.isNaN(x2))
        {
            alert("В полях х1 и х2 должны быть введены числовые значения");
        }
        else if (x1<x2) //Если интервал задан правильно, тогда двигаем дальше
        {
            //Вызываем функцию для поиска простых чисел в заданном интервале
            primaryNumbers(x1,x2);

            var resultDiv = document.querySelector('#result');

            //Удаляем все дочернии узлы для того, чтобы очистить от предыдущих значений
            while(resultDiv.hasChildNodes()) {
                resultDiv.removeChild(resultDiv.firstChild);
            }
            //Получаем значение от radio-переключателя, с точным условием
            var userChoice=document.querySelector('input[name="action"]:checked');

            //На основании полученных данных выполняем то или иное действие
            if(userChoice.value=="sum")
            {
                alert("Считаем сумму");

                //Подсчитываем сумму чисел от х1 до х2
                for (var i=x1;i<=x2;i++)
                {
                    sum+=i;
                }
                resultDiv.append("Сумма чисел в интервале от "+x1+" до "+x2+" включительно = ", + sum);
            }
            else if (userChoice.value=="mult")
            {
                alert("Считаем произведение");

                //Подсчитываем произведение чисел от х1 до х2
                for (var i=x1;i<=x2;i++)
                {
                    mult*=i;
                }
                resultDiv.append("Произведение чисел в интервале от "+x1+" до "+x2+" включительно = ", + mult);
            }     
        } 
        else
        {
            alert("х1 должен быть меньше х2");
        } 
    }
}

//Функция для очистки полей Х1 и Х2
function buttonRemove()
{
    document.getElementById('x1').value=null;
    document.getElementById('x2').value=null;
    console.log("x1, x2 are removed");
}

//Функция для нахождения простых чисел в интевале х1 х2
var simples = [2,3,5,7]; // Здесь лежат простые числа до 10
                         // Так же сюда записываются новые (найденные) простые числа 
                         // Для того, чтобы корректно проверять двух и трехзначные числа
function primaryNumbers(x1, x2)
{
    if(x1<0 || x2<0)
    {
        alert("Отрицательные простые числа не получится найти, используя эту программу");
        return -1;
    }
    var result =[];
    var count=0; 
    var resDiv = document.getElementById("primaryNumbers");

    //Очищаем от предыдущих значений
    while(resDiv.hasChildNodes()) {
        resDiv.removeChild(resDiv.firstChild);
    }
    
    //Основной цикл для поиска простых чисел
    for (var i=x1; i<=x2;i++)
    {
        //Проверка на наличие в интервале 1
        if(i==1)
        {
            resDiv.append("Кроме 1. ")
        }
        else
        {
            //Для каждого числа из интервала х1 и х2, применяем несколько условий, связанных с 
            //имеющимся у нас набором простых чисел в массиве simples
            for(var j=0;j<simples.length;j++)
            {   
                //Если число из интервала принадлежит к простым числам, что нам уже известны,
                // и которые хранятся в массиве simples, записываем его в результат
                if(i==simples[j])
                {
                    result.push(i);
                    break;
                } 
                //Если число из интервала не делится без остатка ни на одно число из известных нам простых чисел
                // то считаем его простым, добавляем в результат и пополняем коллекцию простых чисел в simples
                for(var k =0; k<simples.length;k++)
                {
                    if (i%simples[k]==0)
                    {
                        count++;
                    }
                }
                if(count==0)
                {
                    result.push(i);
                    simples.push(i);
                    break;
                }
            }
            count=0;
        }
    }
    console.log(result);
    resDiv.append("Простые числа в интервале от "+x1+" до "+ x2+" : "+result);
}

