package  {
	
	import flash.display.MovieClip;
	import flash.events.MouseEvent;
	import flash.external.ExternalInterface;
	
	public class HelloWorld extends MovieClip {
		
		
		public function HelloWorld() {
			// constructor code
			btn1.buttonMode=true;
			btnHelloWorld.addEventListener(MouseEvent.CLICK,onClick);
			btn1.addEventListener(MouseEvent.CLICK,onbtn1Click);
			ExternalInterface.addCallback("OnShow",OnShow);
		}
		private function onClick(me:MouseEvent):void{
			if(ExternalInterface.available)
			{
				ExternalInterface.call("Show");
			}
		}
		private function onbtn1Click(me:MouseEvent):void{
			trace("btn1 click");
		}
		private function OnShow(value):void{
			tinput.text=value;
		}
	}
	
}
