export interface Subscription {
    subject_subscription_id: Number,
    subject_id: Number,
    subject_subscription_details: String,
    subject_subscription_description: String,
    subject_subscription_starting_time: String,
    subject_subscription_ending_time: String,
    discounted_price : Float32Array,
    subscription_time : Float32Array,
    price : Float32Array,
}