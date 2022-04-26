
type UsignedInt<T extends number> 
	= number extends T 
	? never : `${T}` extends `-${string}` | `-${string}.${string}` 
	? never : T;

function negate<N extends number>(n : UsignedInt<N>) : number {
	return -n;
} 




