export const container = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.75,
			staggerChildren: 0.35,
		},
	},
};

export const home = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 1,
			delayChildren: 1,
			staggerChildren: 0.5,
		},
	},
};

export const item = {
	hidden: {
		y: 40,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

export const image = {
	hidden: {
		scale: 1.25,
		opacity: 0,
	},
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.25,
		},
	},
};

export const modal = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.25,
			staggerChildren: 0.25,
		},
	},
};

export const modalItem = {
	hidden: {
		scale: 0.9,
		opacity: 0,
	},
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};