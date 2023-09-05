import { Box, Text } from "@/app/styles/components";

const getReview = (rating?: number) => {
	if (!rating) {
		return "No review yet";
	}

	let reviewText = "Very poor";

	if (rating >= 2 && rating < 4) {
		reviewText = "Adequate";
	} else if (rating >= 4 && rating < 5) {
		reviewText = "Very good";
	} else if (rating >= 5) {
		reviewText = "Excellent";
	}

	return `* ${rating} ${reviewText}`;
};

type ReviewProps = {
	rating?: number;
};

export const Review = ({ rating }: ReviewProps) => (
	<Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
		<Text>{getReview(rating)}</Text>
	</Box>
);
