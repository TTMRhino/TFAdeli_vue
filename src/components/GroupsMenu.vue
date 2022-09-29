<template>
  <!-- Menu Groups --->

  <div id="accordion">
                           <div class="">
                           
                               @foreach($groups as $group)
                               
                                   <div class="" id="headingOne" >
                                       @if(isset($group->children[0]) )
                                           <button 
                                           
                                           class="btn btn-link" data-toggle="collapse" data-target="#collapse{{$group->id}}" 
                                               aria-expanded="true" aria-controls="collapse{{$group->id}}"
                                               style="padding-left:0px; padding-right:0px;">
                                               +
                                           </button>  
                                       @endif     
                                      
                                           <a href="{{ route('getAllMainGroup',['groupId' => $group->id ]) }}" class="btn "
                                               style="font-weight:800;font-size:12px; padding:0px;">
                                               {{ $group->title }} 
                                           </a>
                                   
                                                                           
                                   </div>

                                   <div id="collapse{{$group->id}}" class="collapse " aria-labelledby="heading{{$group->id}}" data-parent="#accordion">
                                       @foreach($group->children as $child)                                      
                                           <p>

                                               <a  class="btn" href="{{ route('getAllMainGroup',['groupId' => $child->id ])}}" 
                                                   style="font-size:12px;">  

                                                  -{{ $child->title }} 
                                                
                                               </a>   

                                           </p>
                                                                                

                                       @endforeach
                                   </div>

                               @endforeach
                           </div>                               

                       </div>
                       <!-- END Menu Groups -->  
</template>

<script>
    export default {
     
    }
</script>