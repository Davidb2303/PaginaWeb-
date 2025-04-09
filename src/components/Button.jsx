function Button({className, children, ...props}) {
    return(
        <button 
            className={`bg-blue-500 px-4 py-2  active:ring active:ring-blue-300 mt-4 transition-all font-semibold justify-center rounded-md  ${className}`} 
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;