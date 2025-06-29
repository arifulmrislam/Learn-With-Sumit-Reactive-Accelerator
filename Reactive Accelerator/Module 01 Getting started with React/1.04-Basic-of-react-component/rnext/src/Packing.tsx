function Item({ name, isPacked }) {
    // if (isPacked) {
    //     return <li className='item'>{name} ✅</li>
    //     //null;
    // } 
    // return <li className="item">{name}</li>

    // return (
    //     <li className='item'>
    //         {/* short circuit conditional  */}
    //         {name}{isPacked && '✅'}   
    //     </li>
    // )
    
    // return <li className='item'>{isPacked ? name + '✅': name}</li>;

    let itemContent = '';

    if(isPacked){
        itemContent = name + '✅';
    } else {
        itemContent = name;
    }

    return <li className='item'>{itemContent}</li>
}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={false}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={true}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}


// function Drink({ name }) {
//     let part, caffeine, age;
//     if (name === 'tea') {
//         part = 'leaf';
//         caffeine = '15–70 mg/cup';
//         age = '4,000+ years'
//     } else {
//         part = 'bean';
//         caffeine = '80–185 mg/cup';
//         age = '1,000+ years'
//     }
//     return (
//         <section>
//             <h1>{name}</h1>
//             <dl>
//                 <dt>Part of plant</dt>
//                 {/*         <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd> */}
//                 <dd>{part}</dd>
//                 <dt>Caffeine content</dt>
//                 {/*         <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd> */}
//                 <dd>{caffeine}</dd>
//                 <dt>Age</dt>
//                 {/*         <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd> */}
//                 <dd>{age}</dd>
//             </dl>
//         </section>
//     );
// }
// 
// export default function DrinkList() {
//     return (
//         <div>
//             <Drink name="tea" />
//             <Drink name="coffee" />
//         </div>
//     );
// }
  