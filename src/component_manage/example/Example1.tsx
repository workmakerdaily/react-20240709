// 1. 컴포넌트 추출

// 이 Gallery 컴포넌트는 두 개의 프로필에 대해 매우 유사한 마크업을 포함하고 있습니다. 중복을 줄이기 위해 그것에서 Profile 컴포넌트를 추출하세요. 
// 전달할 props를 선택해야 합니다.


export function getImageUrl(imageId: string, size = 's') {
    return (
        'https://i.imgur.com/' +
        imageId +
        size +
        '.jpg'
    );
}

interface Props {
    name: string;
    imageId: string;
    profession: string;
    awardsCount: number;
    awards:string;
    discovered: string;
}

function Profile({ name, imageId, profession, awardsCount, awards, discovered }: Props) {

    return (
        <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src={getImageUrl(imageId)}
                alt={name}
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {profession}
                </li>
                <li>
                    <b>Awards: {awardsCount} </b>
                    ({awards})
                </li>
                <li>
                    <b>Discovered: </b>
                    {discovered}
                </li>
            </ul>
        </section>
    );

}

export default function Gallery() {

    const profile1 = {
        name: 'Maria Skłodowska-Curie',
        imageId: 'szV5sdG',
        profession: 'physicist and chemist',
        awardsCount: 4,
        awards: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
        discovered: 'polonium (chemical element)'
    };

    const profile2 = {
        name: 'Katsuko Saruhashi',
        imageId: 'YfeOqp2',
        profession: 'geochemist',
        awardsCount: 2,
        awards: 'Miyake Prize for geochemistry, Tanaka Prize',
        discovered: 'a method for measuring carbon dioxide in seawater'
    };

    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile {...profile1} />
            <Profile {...profile2} />
        </div>
    );
}