#ifdef ALPHA_TEST
uniform sampler2D opacity;
#endif

#define LIGHT_ID 0

varying vec3 tpos;

//gl_DepthRangeParameters.diff+gl_DepthRangeParameters.near
vec4 calcColor(){  
  float l = (tpos.z-gl_DepthRange.near)/gl_DepthRange.diff;

#ifdef ALPHA_TEST
  float a = texture2D( opacity, 
                       gl_TexCoord[0].xy).a;
#else
  float a = 1.0;
#endif

  vec3 result = vec3(0.0);
  result[ LIGHT_ID ] = l;

  return vec4( result, a);
  }

void main (void){
  
  //gl_FragColor = vec4(coord.rgb, 1.0);
  gl_FragColor = calcColor();
  }









