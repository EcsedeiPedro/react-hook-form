import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface BillCardProps {
  title: string;
  amount: number;
  date: string;
  previousAmount?: number;
}

const formatDate = (date: string): string => {
  const [year, month, day] = date.split('-').map(Number);
  return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
};

export const BillCard = ({ title, amount, date, previousAmount }: BillCardProps) => {
  const progress = previousAmount
    ? ((amount - previousAmount) / previousAmount) * 100
    : 0;

  const isIncrease = progress >= 0;
  const absoluteProgress = Math.abs(progress);

  return (
    <Card className="p-4">
      <CardHeader className="pb-2">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-4xl">{amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</CardTitle>
      </CardHeader>

      <CardContent>
        <p>{formatDate(date)}</p>
      </CardContent>

      <CardFooter>
        {previousAmount !== undefined ? (
          isIncrease ? (
            <div className="flex flex-col gap-2 w-full">
              <p className="text-green-500">Aumento de {absoluteProgress.toFixed(2)}%</p>
              
              <Progress
                value={Math.min(absoluteProgress, 100)}
                aria-label={absoluteProgress.toFixed(2)}
              />
            </div>
          ) : (
            <p className="text-red-500 font-bold">
              Diminuição de {absoluteProgress.toFixed(2)}%
            </p>
          )
        ) : (
          <p>Nenhum valor a ser comparado</p>
        )}
      </CardFooter>
    </Card>
  );
};
