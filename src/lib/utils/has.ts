/**
 * Check the property existing in the object
 *
 * @param target - The object
 * @param property - The property name
 * @param onlyOwn - If true that will check existing only in own level without checking prototypes
 */
export const has = <P extends PropertyKey>(
    // We should use here `object` instead Record<string, unknown> because it covers more cases
    target: object,
    property: P,
    onlyOwn = true,
): target is { readonly [K in P]: unknown } =>
    onlyOwn ? Object.prototype.hasOwnProperty.call(target, property) : property in target;
