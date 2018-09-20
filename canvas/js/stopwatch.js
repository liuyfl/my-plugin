Stopwatch=function(){};
Stopwatch.prototype={
	starttime:0,
	running:false,
	elapsed:undefined,
	start:function(){
		this.starttime=+new Date();
		this.elapsed=undefined;
		this.running=true;
	},
	stop:function(){
		this.elapsed=(+new Date())-this.starttime;
		this.running=false;
	},
	getElapsed:function(){
		if(this.running){
			return (+new Date())-this.starttime;
		}
		else
			return this.elapsed;
	},
	inRunning:function(){
		return this.running;
	},
	reset:function(){
		this.elapsed=0;
	}
}