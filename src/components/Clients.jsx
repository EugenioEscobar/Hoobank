import { clients } from "../constants"
import styles from "../style"

const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>

            {clients.map((client, index) => (
                <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px]
                    min-w-[192px]`}>
                    <img src={client.logo} className="object-contain sm:w-[192px] w-[100px]
                    hover:brightness-200" />
                </div>
            ))}
        </div>
    </section>
)

export default Clients