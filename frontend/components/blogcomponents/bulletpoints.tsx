
export default function Bullet({bullets} : {bullets:string[]}) {
    return (
<ul className="list-disc ml-10">
    {bullets.map((bullets) => 
        <li>{bullets}</li>
    )}
</ul>
    )
  };
  

  