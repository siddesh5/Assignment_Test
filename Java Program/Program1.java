import java.util.Arrays;
import java.util.Random;

public class Program1 {
    public static void main(String[] args) {
        int arr[]={1,2,3,4,5,6,7};
        Random ra=new Random();
        for (int i=6; i>0;i--)
        {
            int rnum= ra.nextInt(i+1);
            int temp = arr[rnum];
            arr[rnum]=arr[i];
            arr[i]=temp;
        }
        System.out.println(Arrays.toString(arr));
    }
}