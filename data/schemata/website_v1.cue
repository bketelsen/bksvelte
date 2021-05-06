{
	_schema: {
		name:      "Profile"
		namespace: "schemas.cueblox.com"
	}

	#Website: {
		_dataset: {
			plural: "websites"
			supportedExtensions: ["yaml", "yml"]
		}

		url:         string @template("https://google.com")
		profile_id?: string
		brand_name:  string @template("Your Name")
		body?:       string
	}
}
