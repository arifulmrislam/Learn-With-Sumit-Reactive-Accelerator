// const p = {
//     person: {
//         name: "Lin Lanying",
//         imageId: "1bx5qh6",
//     },
//     size: 100,
// };

export default function Avatar(props){
    const {person, size} = props;

    return (
        <div>
            <h1>{person.name}</h1>
            <h1>{person.imageId}</h1>

            <div>{size}</div>
        </div>
    );
}