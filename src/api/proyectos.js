export async function getProduct() {
  try {
    const response = await fetch('http://127.0.0.1:8000/blog/list');
    
    if (!response.ok) {
      throw new Error(`Error al obtener datos: ${response.status}`);
    }
    
    const data = await response.json();
   
    const posts = data.results.posts;
    console.log(posts)
    
    return posts;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error; // Puedes lanzar el error nuevamente para que sea manejado por quien llame a esta función
  }
}


export async function getProductId( {title} ) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/blog/list/${title}`);
    
    if (!response.ok) {
      throw new Error(`Error al obtener datos: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data)
    
    
    return data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error; // Puedes lanzar el error nuevamente para que sea manejado por quien llame a esta función
  }
}