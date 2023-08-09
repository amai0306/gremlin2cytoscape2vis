
export default function List() {
    const products: string[] = ['tomatoes', 'potatoes', 'strawberry', 'beer'];
    const arr: number[] = [2,3,4];
    return (
      <div>
        <h4 className="title">상품목록</h4>
        {
            products.map((a, i)=>{
                return (
                    <div className = "food" key = {i}>
                        <img src={`/${i + 1}.jpg`} className="food-img" />
                        <h4>{products[i]} $40</h4>
                    </div>
                )
            })
        }
      </div>
    )
}