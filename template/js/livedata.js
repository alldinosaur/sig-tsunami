/**
 * LiveData is an observable data holder class inspired from Google Android Jetpack library.
 */
class LiveData {
    // _valueIsInitialized<boolean>
    // _value<any> = undefined
    // _nullSafe = boolean | null | undefined
    // _arrOfFn<array> = []

    /**
     * 
     * @param {any?} v 
     * @param {boolean} nullSafe whether notify for value change when value is undefined | null
     */
    constructor(v, nullSafe = false) {
        this._valueIsInitialized = (v !== undefined)
        this._value = v
        this._nullSafe = nullSafe
        this._arrOfFn = []
    }

    /**
     * Create instance via static method
     * @param {any} v 
     * @returns LiveData
     */
    static make(v, nullSafe = false) {
        return new this(v, nullSafe)
    }

    /**
     * Returns whether an explicit value has been set on this LiveData. If this returns true, then the current value can be retrieved from getValue.
     * @returns boolean
     */
    isInitialized() { return this._valueIsInitialized }

    /**
     * Broadcast the value to all active observers
     */
    async notify() {
        if (this._value || !this._nullSafe) {
            this._arrOfFn.forEach(f => {
                f(this._value)
            })
        }
    }

    /**
     * Posts an asynchronous task to a main thread to set the given value.
     * @param {any} v
     * @return Promise
     */
    async postValue(v) {
        // if (v !== this._value) {
        this._value = v
        this.notify()
        // }
        this._valueIsInitialized = true
    }

    mutateValue(fn) {
        this.postValue(fn(this._value))
        return this
    }

    /**
     * Returns the current value.
     */
    getValue() {
        return this._value
    }

    set value(v) {
        this.postValue(v)
    }

    get value() {
        return this._value
    }

    /**
     * Adds the given observer to the observers list within the lifespan of the given owner. The events are dispatched on the main thread. If LiveData already has data set, it will be delivered to the observer.
     * @param {void} fn 
     */
    observe(fn) {
        this._arrOfFn.push(async (v) => { fn(v) })
        if (this._valueIsInitialized) {
            async (v) => { fn(v) }
        }
    }

    observeDebounce(fn, delay = 300) {
        this._arrOfFn.push(this.debounce(fn, delay))
        if (this._valueIsInitialized) {
            this.debounce(fn, delay)
        }
    }

    observeThrottle(fn, delay = 500) {
        this._arrOfFn.push(this.throttle(fn, delay))
        if (this._valueIsInitialized) {
            this.throttle(fn, delay)
        }
    }

    debounce(func, delay = 300) {
        let timerId;
        return async function () {
            const context = this;
            const args = arguments;
            clearTimeout(timerId);
            timerId = setTimeout(function () {
                func.apply(context, args);
            }, delay);
        };
    }

    throttle(callback, delay = 500) {
        let shouldWait = false;
        return async (...args) => {
            if (shouldWait) return;
            callback(...args);
            shouldWait = true;
            setTimeout(() => {
                shouldWait = false;
            }, delay);
        };
    }
}
