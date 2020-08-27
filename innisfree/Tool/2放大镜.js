function MagniFier(){
	class MF{
		constructor(newSmallBox,newBigBox,newMask) {
		    this.smallBox = newSmallBox;
			this.bigBox = newBigBox;
			this.mask = newMask;
		}
		onmouseover(){
			let that = this;
			this.smallBox.onmouseover = function(){
				that.bigBox.style.display = "block";
				that.mask.style.display = "block";
			}
		}
		
		onmouseout(){
			let that = this;
			this.smallBox.onmouseout = function(){
				that.bigBox.style.display = "none";
				that.mask.style.display = "none";
			}
		}
		
		onmousemove(){
			let that = this;
			this.smallBox.onmousemove = function(evt){
				let e = evt || event;
				
				let left = e.pageX - that.smallBox.offsetLeft - that.mask.offsetWidth/2;
				let top = e.pageY - this.offsetTop - that.mask.offsetHeight/2;
				
				if(left < 0){
					left = 0;
				}
				
				let maxLeft = that.smallBox.offsetWidth - that.mask.offsetWidth;
				
				if(left > maxLeft){
					left = maxLeft;
				}
				
				if(top < 0){
					top = 0;
				}
				
				let maxTop = that.smallBox.offsetHeight - that.mask.offsetHeight;
				
				if(top > maxTop){
					top = maxTop;
				}
				
				let x = that.bigBox.offsetWidth*left/that.mask.offsetWidth;
				let y = that.bigBox.offsetHeight*top/that.mask.offsetHeight;
				
				that.mask.style.left = left + "px";
				that.mask.style.top = top + "px";
				
				that.bigBox.style.backgroundPositionX = -x + "px";
				that.bigBox.style.backgroundPositionY = -y + "px";
			}
		}
		
		eventBind(){
			this.onmouseover();
			this.onmouseout();
			this.onmousemove()
		}
	}
	
	let oSmallBox = document.querySelector("#small-box");
	let oBigBox = document.querySelector("#big-box");
	let oMask = document.querySelector("#mask");
	let mf = new MF(oSmallBox,oBigBox,oMask);
    mf.eventBind();
}
