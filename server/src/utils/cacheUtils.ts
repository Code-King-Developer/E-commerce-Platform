import redisConnection from '../config/redis.js';

/**
 * Gets cached data from Redis.
 * @param key The cache key to look up.
 * @returns The parsed data or null if not found.
 */
export async function getCachedData<T>(key: string): Promise<T | null> {
  try {
    const cachedData = await redisConnection.get(key);
    if (cachedData) {
      return JSON.parse(cachedData) as T;
    }
  } catch (error) {
    console.error(`Error getting cached data for key ${key}:`, error);
  }
  return null;
}

/**
 * Sets data in Redis cache.
 * @param key The cache key.
 * @param data The data to store.
 * @param ttl Time to live in seconds (default: 3600).
 */
export async function setCachedData<T>(key: string, data: T, ttl: number = 3600): Promise<void> {
  try {
    const stringifiedData = JSON.stringify(data);
    await redisConnection.set(key, stringifiedData, 'EX', ttl);
  } catch (error) {
    console.error(`Error setting cached data for key ${key}:`, error);
  }
}

/**
 * Invalidates (deletes) keys from the Redis cache.
 * @param key A single key or an array of keys.
 */
export async function invalidateCache(key: string | string[]): Promise<void> {
  try {
    if (Array.isArray(key)) {
      if (key.length > 0) {
        await redisConnection.del(...key);
      }
    } else {
      await redisConnection.del(key);
    }
  } catch (error) {
    console.error(`Error invalidating cache for key(s) ${key}:`, error);
  }
}
