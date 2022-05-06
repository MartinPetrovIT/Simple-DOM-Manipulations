      function solve() {
         document.querySelector('#btnSend').addEventListener('click', onClick);

         
         function onClick () {
            let input = JSON.parse(document.querySelector("textarea").value);
            let obj = {};
            let totalSum = 0;
            let curCount = 0;
            for(let k = 0; k< input.length; k++)
            {
               let splitRestaurant = input[k].split(" - ")
               let resName = splitRestaurant[0]
            let workersData = splitRestaurant[1].split(", ");
            
            
            for(let worker of workersData)
            {
               curCount = workersData.length;
               let [name ,salary] =  worker.split(" ");
               if(obj.hasOwnProperty(resName))
               { 
                  obj[resName][name] = Number(salary)
                  }
                  if(!obj.hasOwnProperty(resName)){
                     obj[resName] = {};
                     obj[resName][name] = Number(salary)
                     
                  }
                  if(!obj[resName].hasOwnProperty("count"))
                  {
                     obj[resName]["count"] = 1;
                  }
                  else{
                   
                     obj[resName]["count"]++;
                  }
                 
                 

               totalSum +=  Number(salary);

               
               }
               if(obj[resName].hasOwnProperty("total"))
               {
                  obj[resName]["total"] += totalSum;
               }
               else{
                  obj[resName]["total"] = totalSum;
               }
            totalSum = 0;
            
            }
            
         for( restaurant in obj)
         {
               obj[restaurant]['avg'] =   obj[restaurant]['total'] /obj[restaurant]['count'];
         }
            //`Name: {restaurant name} Average Salary: {restaurant avgSalary} Best Salary: {restaurant bestSalary}`
            let keys = Object.keys(obj)
            let bestKey ="";
            let bestAvg = 0;
            for(let key of keys)
            {
               if( obj[key]["avg"] > bestAvg)
               {
                  bestAvg =  obj[key]["avg"] 
                  bestKey = key
               }
               
            }
            

            let bestRest2 = document.querySelector('#bestRestaurant p')
            let bestWorkers = document.querySelector('#workers p')
            
               delete obj[bestKey]["avg"]
               delete obj[bestKey]["count"]
               delete obj[bestKey]["total"]
            let bestWorkersEver = Object.entries(obj[bestKey])
            
            bestWorkersEver=  bestWorkersEver.sort((a,b) => b[1] - a[1])
            
         
            bestRest2.textContent = `Name: ${bestKey} Average Salary: ${bestAvg.toFixed(2)} Best Salary: ${(bestWorkersEver[0][1]).toFixed(2)}`
            let output = "";
            for( let everWorker of bestWorkersEver)
            {
               output += `Name: ${everWorker[0]} With Salary: ${everWorker[1]} `

            }

            bestWorkers.textContent = output
         }
      }