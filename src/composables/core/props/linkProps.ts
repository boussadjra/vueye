const linkProps = {
    link: {
        type: Boolean,
        default: false,
        description: "Make the component a link",
    },
    to: {
        type: [String, Object],
        default: "",
        description: "The route to link to",
    },
}

export default linkProps;