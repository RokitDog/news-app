import { categories } from '../constants'
import fetchNews from '../utils/fetchNews';
import NewsList from './NewsList';
import response from '../response.json'



async function page() {
    
    const news: NewsResponse = await fetchNews(categories.join(','))  || response ;

    return (
    <div>
      <NewsList news={news}/>
    </div>
  )
}

export default page