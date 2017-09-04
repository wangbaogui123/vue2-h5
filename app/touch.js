//Vue 图片懒加载
export default (Vue , options = {})=>{

    const divarr = [];

    const ontouch = (h,w) => {


        var par = document.getElementById("tableBox");
        
            par.addEventListener("touchmove",move,false);
    
            function move(event){

                event.preventDefault();
                var x = event.touches[0].pageX,
                    y = event.touches[0].pageY;

                //console.log(x,y);    
                for(var i=0;i<divarr.length;i++){
                    
                    if(!divarr[i].data.value.isclick){
                        if(x > divarr[i].left && x < divarr[i].left+w && y > divarr[i].top && y < divarr[i].top+h){
                            divarr[i].data.value.isclick = 1; 
                        }
                    }
                    
                }    
            }
        
    }

    let isone = true;

    const addListener = (ele,binding) =>{

        var obj = {
            ele:ele,
            data:binding,
            top:ele.offsetTop,
            left:ele.offsetLeft
        }

        const divH = ele.offsetHeight;
        const divW = ele.offsetWidth;
        divarr.push(obj);
        

        
        ontouch(divH,divW);

        

    }
    
    Vue.directive('touch',{
      inserted:addListener,
      updated:addListener
    })
  }