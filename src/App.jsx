import styles from "./style"

import { Stats, Business, Billing, CardDeal, Testimonials, Clients, 
    CTA, Footer, Navbar, Hero } from "./components/index"

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`xl:w-[88%] xl:relative xl:right-[-6%]`}>
                <Hero />
            </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Stats />
                <Business />
                <Billing />
                <CardDeal />
                <Testimonials />
                <Clients />
                <CTA />
                <Footer />

            </div>
        </div>
    </div>
)

export default App