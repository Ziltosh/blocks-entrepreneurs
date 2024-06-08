import {createContext, hydrateRoot, useContext} from "@wordpress/element";
import {Header} from "./header";

/**
 * All DOM elements with block
 * @type {NodeListOf<Element>}
 */
const elements = document.querySelectorAll('.wp-block-entrepreneurs-header');


/**
 * Create a context
 *
 * @see https://daveceddia.com/usecontext-hook/
 * @see https://reactjs.org/docs/context.html
 * @type {React.Context<any>}
 */
const HeaderContext = createContext(null);
const {Provider} = HeaderContext;

/**
 * Provide data for the form
 */
function HeaderProvider({children, initialCount}) {

    return (
        <Provider value={{
        }}>
            {children}
        </Provider>
    );
}

/**
 * Form wrapped in context
 */
const HeaderWithProvider = () => {
    //Get everything from context
    const {
        menuId,
    } = useContext(HeaderContext);

    return (
        <Header
            menuId={menuId}
        />
    );

};

/**
 * Show form value with context
 */
function FormDataDisplayConsumer() {
    //Get the value from context
    const {
        defaultValue,
    } = useContext(HeaderContext);
    return (
        <div>{defaultValue}</div>

    )
}

/**
 * If we have any blocks hydrate the server-side renderered HTML
 */
if (elements.length) {
    elements.forEach(element => {
        hydrateRoot(element, <HeaderProvider initialCount={0}>
            <HeaderWithProvider />
        </HeaderProvider>)
    })
}