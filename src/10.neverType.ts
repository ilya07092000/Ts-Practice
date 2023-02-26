function generateError(message: string, code: number): never {
	// never means this function never finish successfully
	throw { message, errorCode: code };
	// also works if we have infinite loop
}

generateError('Some Error', 228);
