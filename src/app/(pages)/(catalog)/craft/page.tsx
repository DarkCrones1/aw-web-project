import CardCraft from "@/components/craft/card/CardCraft";
import { GetCraft } from "@/libs/Craft/getCraft";

export default async function CraftPage() {
    const data = await GetCraft()
    return (
        <div>
            {data.map(craft => (
                <CardCraft craft={craft}/>
            ))}
        </div>
    );
}
