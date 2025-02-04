export async function GET() {
    const response = await fetch('https://api.com/some/route', {
        cache: 'no-store',
      })
    
    if(!response.ok){
      throw new Error('Failed to fetch data.')
    }
    
    const result = await response.json()
    return Response.json(result)
  }