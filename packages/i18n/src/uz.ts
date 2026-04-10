import type { Language } from "./types";

// prettier-ignore
const language: Language = {
	code: "uz",
	schema: (issue) =>
		`Noto'g'ri tur: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
	specific: {
		base64: (issue) => `Noto'g'ri Base64: qabul qilingan ${issue.received}`,
		bic: (issue) => `Noto'g'ri BIC: qabul qilingan ${issue.received}`,
		bytes: (issue) =>
			`Noto'g'ri baytlar soni: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		check: (issue) => `Noto'g'ri ma'lumot: qabul qilingan ${issue.received}`,
		checkAsync: (issue) =>
			`Noto'g'ri ma'lumot: qabul qilingan ${issue.received}`,
		checkItems: (issue) =>
			`Noto'g'ri element: qabul qilingan ${issue.received}`,
		checkItemsAsync: (issue) =>
			`Noto'g'ri element: qabul qilingan ${issue.received}`,
		creditCard: (issue) =>
			`Noto'g'ri kredit karta raqami: qabul qilingan ${issue.received}`,
		cuid2: (issue) => `Noto'g'ri Cuid2: qabul qilingan ${issue.received}`,
		decimal: (issue) =>
			`Noto'g'ri o'nli qiymat: qabul qilingan ${issue.received}`,
		digits: (issue) => `Noto'g'ri raqam: qabul qilingan ${issue.received}`,
		domain: (issue) => `Noto'g'ri domen: qabul qilingan ${issue.received}`,
		email: (issue) =>
			`Noto'g'ri elektron pochta: qabul qilingan ${issue.received}`,
		emoji: (issue) => `Noto'g'ri emoji: qabul qilingan ${issue.received}`,
		empty: (issue) =>
			`Noto'g'ri uzunlik: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		endsWith: (issue) =>
			`Noto'g'ri oxiri: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		entries: (issue) =>
			`Noto'g'ri yozuvlar soni: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		everyItem: (issue) => `Noto'g'ri element: qabul qilingan ${issue.received}`,
		excludes: (issue) =>
			`Noto'g'ri kirish: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		finite: (issue) => `Noto'g'ri chekli son: qabul qilingan ${issue.received}`,
		graphemes: (issue) =>
			`Noto'g'ri grafemalar soni: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		gtValue: (issue) =>
			`Noto'g'ri qiymat: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		guard: (issue) => `Noto'g'ri ma'lumot: qabul qilingan ${issue.received}`,
		hash: (issue) => `Noto'g'ri hash: qabul qilingan ${issue.received}`,
		hexadecimal: (issue) =>
			`Noto'g'ri o'n oltilik qiymat: qabul qilingan ${issue.received}`,
		hexColor: (issue) =>
			`Noto'g'ri o'n oltilik rang: qabul qilingan ${issue.received}`,
		imei: (issue) => `Noto'g'ri IMEI: qabul qilingan ${issue.received}`,
		includes: (issue) =>
			`Noto'g'ri kirish: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		integer: (issue) => `Noto'g'ri butun son: qabul qilingan ${issue.received}`,
		ip: (issue) => `Noto'g'ri IP: qabul qilingan ${issue.received}`,
		ipv4: (issue) => `Noto'g'ri IPv4: qabul qilingan ${issue.received}`,
		ipv6: (issue) => `Noto'g'ri IPv6: qabul qilingan ${issue.received}`,
		isbn: (issue) => `Noto'g'ri ISBN: qabul qilingan ${issue.received}`,
		isoDate: (issue) => `Noto'g'ri sana: qabul qilingan ${issue.received}`,
		isoDateTime: (issue) =>
			`Noto'g'ri sana va vaqt: qabul qilingan ${issue.received}`,
		isoTime: (issue) => `Noto'g'ri vaqt: qabul qilingan ${issue.received}`,
		isoTimeSecond: (issue) =>
			`Noto'g'ri soniyali vaqt: qabul qilingan ${issue.received}`,
		isoTimestamp: (issue) =>
			`Noto'g'ri vaqt belgisi: qabul qilingan ${issue.received}`,
		isoWeek: (issue) => `Noto'g'ri hafta: qabul qilingan ${issue.received}`,
		isrc: (issue) => `Noto'g'ri ISRC: qabul qilingan ${issue.received}`,
		jwsCompact: (issue) =>
			`Noto'g'ri ixcham JWS: qabul qilingan ${issue.received}`,
		length: (issue) =>
			`Noto'g'ri uzunlik: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		ltValue: (issue) =>
			`Noto'g'ri qiymat: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		mac: (issue) => `Noto'g'ri MAC: qabul qilingan ${issue.received}`,
		mac48: (issue) =>
			`Noto'g'ri 48-bitli MAC: qabul qilingan ${issue.received}`,
		mac64: (issue) =>
			`Noto'g'ri 64-bitli MAC: qabul qilingan ${issue.received}`,
		maxBytes: (issue) =>
			`Noto'g'ri baytlar soni: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		maxEntries: (issue) =>
			`Noto'g'ri yozuvlar soni: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		maxGraphemes: (issue) =>
			`Noto'g'ri grafemalar soni: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		maxLength: (issue) =>
			`Noto'g'ri uzunlik: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		maxSize: (issue) =>
			`Noto'g'ri hajm: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		maxValue: (issue) =>
			`Noto'g'ri qiymat: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		maxWords: (issue) =>
			`Noto'g'ri so'zlar soni: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		mimeType: (issue) =>
			`Noto'g'ri MIME turi: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		minBytes: (issue) =>
			`Noto'g'ri baytlar soni: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		minEntries: (issue) =>
			`Noto'g'ri yozuvlar soni: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		minGraphemes: (issue) =>
			`Noto'g'ri grafemalar soni: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		minLength: (issue) =>
			`Noto'g'ri uzunlik: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		minSize: (issue) =>
			`Noto'g'ri hajm: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		minValue: (issue) =>
			`Noto'g'ri qiymat: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		minWords: (issue) =>
			`Noto'g'ri so'zlar soni: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		multipleOf: (issue) =>
			`Noto'g'ri karrali son: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		nanoid: (issue) => `Noto'g'ri Nano ID: qabul qilingan ${issue.received}`,
		nonEmpty: (issue) =>
			`Noto'g'ri uzunlik: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		notBytes: (issue) =>
			`Noto'g'ri baytlar soni: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		notEntries: (issue) =>
			`Noto'g'ri yozuvlar soni: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		notGraphemes: (issue) =>
			`Noto'g'ri grafemalar soni: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		notLength: (issue) =>
			`Noto'g'ri uzunlik: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		notSize: (issue) =>
			`Noto'g'ri hajm: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		notValue: (issue) =>
			`Noto'g'ri qiymat: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		notValues: (issue) =>
			`Noto'g'ri qiymat: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		notWords: (issue) =>
			`Noto'g'ri so'zlar soni: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		octal: (issue) =>
			`Noto'g'ri sakkizlik qiymat: qabul qilingan ${issue.received}`,
		parseBoolean: (issue) =>
			`Noto'g'ri mantiqiy qiymat: qabul qilingan ${issue.received}`,
		parseJson: (issue) => `Noto'g'ri JSON: qabul qilingan ${issue.received}`,
		partialCheck: (issue) =>
			`Noto'g'ri ma'lumot: qabul qilingan ${issue.received}`,
		rawCheck: (issue) => `Noto'g'ri ma'lumot: qabul qilingan ${issue.received}`,
		rawTransform: (issue) =>
			`Noto'g'ri ma'lumot: qabul qilingan ${issue.received}`,
		regex: (issue) =>
			`Noto'g'ri format: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		rfcEmail: (issue) =>
			`Noto'g'ri elektron pochta: qabul qilingan ${issue.received}`,
		safeInteger: (issue) =>
			`Noto'g'ri xavfsiz butun son: qabul qilingan ${issue.received}`,
		size: (issue) =>
			`Noto'g'ri hajm: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		slug: (issue) => `Noto'g'ri slug: qabul qilingan ${issue.received}`,
		someItem: (issue) => `Noto'g'ri element: qabul qilingan ${issue.received}`,
		startsWith: (issue) =>
			`Noto'g'ri boshlanishi: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		stringifyJson: (issue) =>
			`Noto'g'ri JSON: qabul qilingan ${issue.received}`,
		toBigint: (issue) => `Noto'g'ri BigInt: qabul qilingan ${issue.received}`,
		toDate: (issue) => `Noto'g'ri sana: qabul qilingan ${issue.received}`,
		toNumber: (issue) => `Noto'g'ri raqam: qabul qilingan ${issue.received}`,
		toString: (issue) => `Noto'g'ri satr: qabul qilingan ${issue.received}`,
		ulid: (issue) => `Noto'g'ri ULID: qabul qilingan ${issue.received}`,
		url: (issue) => `Noto'g'ri URL: qabul qilingan ${issue.received}`,
		uuid: (issue) => `Noto'g'ri UUID: qabul qilingan ${issue.received}`,
		value: (issue) =>
			`Noto'g'ri qiymat: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		values: (issue) =>
			`Noto'g'ri qiymat: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
		words: (issue) =>
			`Noto'g'ri so'zlar soni: kutilgan ${issue.expected}, qabul qilingan ${issue.received}`,
	},
};

export default language;
