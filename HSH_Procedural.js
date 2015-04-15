/*****************************************************
 *                                                   *
 * HSH Procedural Algorithm                          *
 *                                                   *
 *---------------------------------------------------*
 *                                                   *
 * Copyright (c) ReStained Heavy Industries 2014     *
 *                                                   *
 *****************************************************/
 
var Shortest=1000;
var Longest=-1000;

outerArr=new Array();

function HSHPush(x,dataVal)
{
		console.log(dataVal);
		
		if(x<Shortest) Shortest=x;
		if(x>Longest) Longest=x;
		
		if(outerArr[x]==undefined){
				outerArr[x]=new Array();
				outerArr[x].push(dataVal);
		}else{
				outerArr[x].push(dataVal);						
		}
		
}

function HSHPop()
{
		var retVal=undefined;
		
		// In some cases shortest is not correct, search in those cases
		// Should not be needed
		if(outerArr[Shortest]==undefined){
				for(i=Shortest;i<=Longest;i++){
						if(outerArr[i]!=undefined){
								Shortest=i;
								break;
						} 
				}
		}
		//----------------------
		
		// If we have information in current slot 		
		if(outerArr[Shortest]!=undefined){
				if(outerArr[Shortest].length==1){
					
						retVal=outerArr[Shortest].pop();
						outerArr[Shortest]=undefined;
						for(i=Shortest;i<=Longest;i++){
								if(outerArr[i]!=undefined){
										Shortest=i;
										break;
								} 
						}
				}else{
						retVal=outerArr[Shortest].pop();					
				}
		}
		return retVal;
}

function HSHClear()
{
		for(i=Shortest;i<=Longest;i++){
				if(outerArr[i]!=undefined){
						if(outerArr[i].length>0){
								outerArr[i].length=0;
								outerArr[i]=undefined;
						} 	
				}
		}
		Shortest=1000;
		Longest=-1000;
}
                                                
